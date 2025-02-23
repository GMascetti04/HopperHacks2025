from flask import Flask, jsonify, request
import random


app = Flask(__name__)

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
    
    request_data = request.get_json()
    
    query_text = request_data['query_text']
    
    print(query_text)
    
    motivational_text = random.choice(quotes)

   

    return jsonify(
        {"motivational_text": motivational_text, 
         
         }
    )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
