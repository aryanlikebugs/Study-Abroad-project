# Use a lightweight Python image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Create a writable cache directory
RUN mkdir -p /app/.cache/huggingface && chmod -R 777 /app/.cache

# Set the Hugging Face cache directory
ENV HF_HOME="/app/.cache/huggingface"

# Install system dependencies
RUN apt-get update && apt-get install -y git

# Upgrade pip
RUN pip install --upgrade pip

# Install dependencies
COPY requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application code
COPY . .

# Expose the port for FastAPI
EXPOSE 8000

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
