from ollama import chat
from ollama import ChatResponse

from flask import Flask, jsonify
import subprocess
from gtts import gTTS
import os

app = Flask(__name__)


@app.route("/motivational-message", methods=["GET"])
def get_motivational_quote():
    prompt = "Give me a motivational quote."

    response: ChatResponse = chat(
        model="llama3.2",
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )
    return jsonify({"message": response.message.content})


@app.route("/motivational-audio", methods=["GET"])
def generate_motivation():
    motivational_text = get_motivational_quote()

    tts = gTTS(motivational_text, lang="en")
    mp3_filename = "motivational_speech.mp3"
    tts.save(mp3_filename)

    return jsonify(
        {"motivational_text": motivational_text, "audio_url": f"/static/{mp3_filename}"}
    )


if __name__ == "__main__":
    app.run(debug=True)
