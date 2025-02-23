from ollama import chat
from ollama import ChatResponse
from flask_cors import CORS

from flask import Flask, jsonify, request
import subprocess

import os

app = Flask(__name__)
CORS(app)


def get_motivational_quote(query_text):
    prompt = "Give me a motivational quote."
    prompt = query_text

    response: ChatResponse = chat(
        model="llama3.2",
        messages=[
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )
    #return jsonify({"message": response.message.content})
    return response.message.content


@app.route("/generate-motivation", methods=["POST"])
def generate_motivation():
    
    request_data = request.get_json()
    
    query_text = request_data['query_text']
    
    print(query_text)
    
    motivational_text = get_motivational_quote(query_text)

    #tts = gTTS(motivational_text, lang="en")
    #mp3_filename = "motivational_speech.mp3"
    #tts.save(mp3_filename)

    print(f"motivational text: {motivational_text}")

    return jsonify(
        {"motivational_text": motivational_text, 
         #
         # "audio_url": f"/static/{mp3_filename}"
         }
    )


if __name__ == "__main__":
    app.run(debug=True)
