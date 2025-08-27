from flask import Flask, request, jsonify, render_template
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("Gemini API key not found. Please set GEMINI_API_KEY in .env")

# Configure Gemini
genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash-latest")


# Initialize Flask app
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")
    if not prompt:
        return jsonify({"response": "Please enter a valid style prompt."}), 400

    try:
        response = model.generate_content(prompt)

        # Clean markdown symbols and unwanted characters
        clean_text = response.text.replace("*", "").replace("•", "").replace("8.", "").strip()

        # Optional: Replace common markdown bullets with custom symbols
        formatted = clean_text.replace("Option 1:", "➤ Option 1:") \
                              .replace("Option 2:", "➤ Option 2:") \
                              .replace("Option 3:", "➤ Option 3:")

        # Replace double line breaks with single for smoother flow
        formatted = formatted.replace("\n\n", "\n")

        return jsonify({"response": formatted})
    except Exception as e:
        return jsonify({"response": f"Error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
