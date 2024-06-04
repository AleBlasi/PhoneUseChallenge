# generate_output.py
def generate_output():
    # Example logic to generate output
    output = "Hello, World! YUUUUPPPYYYYYY"
    return output

if __name__ == "__main__":
    output = generate_output()
    with open("README.md", "w") as f:
        f.write("# Update Readme Example\n\n")
        f.write(output)
