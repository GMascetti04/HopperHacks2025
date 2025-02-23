from ollama import chat
from ollama import ChatResponse
from flask_cors import CORS

from flask import Flask, jsonify, request
import subprocess

import os

app = Flask(__name__)
CORS(app)


def get_motivational_quote(query_text):
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
    
    return response.message.content


@app.route("/generate-motivation", methods=["POST"])
def generate_motivation():
    
    request_data = request.get_json()
    
    
    query_text = request_data['query_text']
    
    celeb_name = request_data['celeb_name']
    celeb_context = request_data['celeb_contex']
    user_context = request_data['user_context']
    celeb_mood = request_data['celeb_mood']['description']
    celeb_mood_description = request_data['celeb_mood']['message']
    
    
    
    query_text = f"Generate a motivational quote that sounds like it would be said by {celeb_name}. For additional context, {celeb_name} is {celeb_context}. This is what the person who wants motivation said about what they are doing: '{user_context}'. Make the motivational quote go good with that. The quote must sound like the person saying it is {celeb_mood}, meaning that they will {celeb_mood_description} Make the quote less than 20 words. Only include the text of the quote."
    
    print(query_text)
    
    
    motivational_text = get_motivational_quote(query_text)

    return jsonify( {"motivational_text": motivational_text, } ), 200


if __name__ == "__main__":
    app.run(debug=True)
