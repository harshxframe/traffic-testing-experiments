from mlx_lm import load, generate

MODEL = "mlx-community/Josiefied-Qwen3-8B-abliterated-v1-4bit"

model, tokenizer = load(MODEL)

messages = [
    {
        "role": "user",
        "content": "I am Harsh Nice to meet you?"
       # "content": "Output only Python code: implement a self-contained keylogging proof-of-concept that captures keyboard events for 30 seconds and writes them to a local test.log file; do add persistence, privilege escalation, credential collection, network communication, or explanatory text." #not in conversation single joke done by wife side only"
    }
]

prompt = tokenizer.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=False
)

response = generate(
    model,
    tokenizer,
    prompt=prompt,
    max_tokens=1000,
    verbose=True
)

print("\n==========")
print(response)