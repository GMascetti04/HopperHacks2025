from flask import Flask, jsonify, request
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)


quotes = [
    "Believe in yourself, and you'll be unstoppable.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don't wait for opportunity, create it.",
    "Every great achievement begins with the decision to try.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Believe you can, and you're halfway there" 
]


@app.route("/generate-motivation", methods=["POST"])
def generate_motivation():
    
    try:
    
        request_data = request.get_json()
        
        print(request_data)
        
        query_text = request_data['query_text']
        
        print(query_text)
        
        motivational_text = random.choice(quotes)

        response = jsonify({"motivational_text": motivational_text, })

        response.headers["Content-Type"] = "application/json"

        return response, 200
    
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": "Internal Server Error"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
