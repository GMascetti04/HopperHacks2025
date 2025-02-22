import { useState, useEffect } from "react";



const UserOptions = ({ celebrityName, celebrityImagePath, onChangeCurrentCeleb, onDone }) => {

    const [text, changeText] = useState('')

    const [selectedMood, setSelectedMood] = useState(null);

    const [moods, setMoods] = useState<never[]>([]);



    const handleSelectMood = (mood) => {
        setSelectedMood(mood); // Update the selected mood
    };


    const handleChange = (event) => {
        changeText(event.target.value); // Update state with the text input value
    };

    useEffect(() => {
        fetch("/moods.json") // The JSON file is located in the public folder
            .then((response) => response.json())
            .then((data) => { setMoods(data); console.log(data); })
            .catch((error) => console.error("Error loading moods data:", error));
    }, []);

    return (

        <div>

            <div style={{display: 'flex'}}>

                <div style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '20px' }}>
                    <h1 style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>You Selected:</h1>

                    <div style={{  alignItems: 'center' }}>
                        <img
                            src={celebrityImagePath}
                            alt={celebrityName}
                            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: "cover", objectPosition: "center", }}
                        />
                        <p style={{ marginRight: '10px', alignItems: 'center' }}>{celebrityName}</p> {/* Ensure name is centered */}
                        <button onClick={
                            onChangeCurrentCeleb
                        }>Change</button>

                    </div>
                </div>

                <div>

                    <h1>What are you doing?</h1>

                    <textarea
                        id="textarea"
                        value={text} // Bind value of textarea to state
                        onChange={handleChange} // Update state on change
                        rows={4} // Number of visible rows
                        cols={50} // Number of visible columns
                        placeholder="Type something here..."
                        maxLength={500}
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            resize: "none", // Allow resizing both vertically and horizontally
                        }}
                    />

                    {/* Display remaining character count */}
                    <div>
                        {text.length < 500 ? (
                            <p>{500 - text.length} characters remaining</p>
                        ) : (
                            <p style={{ color: "red" }}>Character limit reached! Please remove some text.</p>
                        )}
                    </div>
                </div>


            </div>




            <h2>Select How You Want the Motivator to Speak to You</h2>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                {moods.map((mood) => (
                    <div
                        key={mood.id}
                        onClick={() => handleSelectMood(mood)}
                        style={{
                            textAlign: "center",
                            cursor: "pointer",
                            padding: "10px",
                            borderRadius: "10px",
                            transition: "transform 0.3s ease",
                            backgroundColor: selectedMood?.id === mood.id ? "#D3D3D3" : "transparent",
                        }}
                        title={mood.description} // Tooltip on hover
                    >
                        <div style={{ fontSize: "50px" }}>{mood.emoji}</div>
                        <div style={{ fontSize: "14px" }}>{mood.description}</div>
                    </div>
                ))}
            </div>

            {selectedMood && (
                <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
                    The celebrity that you've chosen will {selectedMood.message}
                </div>
            )}

            <button onClick={onDone}>Motiatve Me!</button>

        </div>

    );
};

export default UserOptions;
