import re

def clean_email(text):
    if not isinstance(text, str):
        return ""

    text = text.lower()  # lowercase
    text = re.sub(r"http\S+|www\S+", "", text)  # remove links
    text = re.sub(r"[^a-zA-Z0-9 ]", " ", text)  # remove symbols
    text = re.sub(r"\s+", " ", text).strip()  # remove extra spaces

    return text
