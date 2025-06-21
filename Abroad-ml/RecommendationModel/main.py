import os
import torch
from fastapi import FastAPI, Query
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from huggingface_hub import login

app = FastAPI()

# Set a custom cache directory
CACHE_DIR = "/app/.cache/huggingface"
os.environ["HF_HOME"] = CACHE_DIR
os.makedirs(CACHE_DIR, exist_ok=True)

# Retrieve Hugging Face token
HF_TOKEN = os.getenv("HF_TOKEN")
if not HF_TOKEN:
    raise ValueError("Hugging Face API token is missing. Set HF_TOKEN as an environment variable.")

login(HF_TOKEN)  # Authenticate session

# Load Gemma 2B model (optimized for CPU)
MODEL_NAME = "google/gemma-1.1-2b-it"  
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, token=HF_TOKEN)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_NAME, 
    token=HF_TOKEN,
    torch_dtype=torch.float32,  # Use float32 for CPU
    device_map="cpu"  # Ensure CPU execution
)

text_generator = pipeline("text-generation", model=model, tokenizer=tokenizer)


@app.get("/")
def home():
    return {"message": "Welcome to the AI College Recommendation API"}

@app.get("/recommend")
def recommend_college(
    degree: str = Query(..., description="Degree level (Bachelors or Masters)"),
    country: str = Query(None, description="Preferred country (optional)"),
    budget: str = Query(None, description="Budget preference (Low-to-High or High-to-Low)"),
):
    # Convert budget value
    budget_text = "from low to high" if budget == "Low-to-High" else "from high to low" if budget == "High-to-Low" else "flexible"

    # Construct prompt for AI
    prompt = f"""
    I am looking for universities offering {degree} programs in Computer Science.
    My preferred country is {country if country else "any country"}.
    My budget preference is {budget_text}.
    Provide a list of top universities that match these criteria.
    Include details about the program, faculty expertise, research opportunities, tuition fees, and cost of living.
    """

    # Generate recommendation
    response = text_generator(prompt, max_length=250)[0]["generated_text"]
    return {"recommendation": response}
