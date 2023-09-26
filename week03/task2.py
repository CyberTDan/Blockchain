import math

from task1 import computeNED

def encrypt_decrypt(e_d : int, n : int, text: str) -> str:
    """
    Function for encryption and decryption of given text

    Arguments:
    e_d  - RSA values, pass 'e' to encrypt, 'd' to decrypt
    text - string  
    """
    decrypted = [pow(ord(ch), e_d, n) for ch in text] 
    return ''.join(chr(i) for i in decrypted)


def apply_rsa(p : int, q : int, text_to_encrypt : str) -> tuple[int, int, int, str]:
    """
    Function for compting RSA values and encrypting string

    Arguments:
    p, q            - prime numbers, throw exception if not prime
    text_to_encrypt - text that should be encrypted

    Return:
    n, e, d - RSA values
    str - encrypted string  
    """
    n, e, d = computeNED(p, q)
    applied = encrypt_decrypt(e, n, text_to_encrypt)
    return [n, e, d, applied]

if __name__ == "__main__":
    p, q = [23, 17]
    text = "Hello encrypt world!"

    print(f"Launching algoritm with\n  'p' = {p}\n  'q' = {q}\n  text = {text}")

    n, e, d, res = apply_rsa(p, q, text)
    print(f"{n}, {e}, {d}")
    res = encrypt_decrypt(e, n, "Hello encrypt world!")
    print(f"Encrypted text:\n  {res}")

    res = encrypt_decrypt(d, n, res)
    print(f"Decrypted text:\n  {res}")