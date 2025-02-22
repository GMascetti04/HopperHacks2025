import React, {useState, useEffect} from "react";

interface Celebrity {
  name: string;
  image: string;
}

const CelebButtonGrid = () => {

    const [images, setCelebrities] = useState<Celebrity[]>([]);

  useEffect(() => {

    

    fetch("/celebs.json") 
      .then((response) => response.json())
      .then((data) => {setCelebrities(data.celebs); console.log(data.celebs);})
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4"> {/* 3 columns, 5 rows */}
      {images.map((celeb, index) => (
        <button 
          key={index} 
          className="flex flex-col items-center p-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          <img 
            src={celeb.image} 
            alt={celeb.name} 
            className="w-24 h-24 object-cover rounded-full"
          />
          <span className="mt-2 text-sm font-semibold">{celeb.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CelebButtonGrid;

//     return (
//       <div className="grid grid-cols-3 gap-4 p-4">
//         {images.map((item, index) => (
//           <button key={index} className="flex flex-col items-center p-2 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition">
//             <img src={"src/assets/download.jpg"} alt={"josh"} className="w-24 h-24 object-cover rounded-md" />
//             <span className="mt-2 text-sm font-medium">{"test name"}</span>
//           </button>
//         ))}
//       </div>
//     );
//   };
  
// export default CelebButtonGrid;