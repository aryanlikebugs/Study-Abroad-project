import uvicorn
from main import app  # Import the FastAPI app from main.py

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=7860)
