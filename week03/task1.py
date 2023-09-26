import math

def computeNED(p : int, q : int) -> tuple[int, int, int]:
    """
    Function for computing RSA numbers 

    Arguments:
    p, q - prime numbers

    Returns:
    n, e, d integer values for encyption / decryption
    """
    def isprime(num):
        for n in range(2,int(num**0.5)+1):
            if num%n==0:
                return False
        return True
    

    #Extended Euclidean Algorithm
    def eea(a,b):
        if(a%b==0):
            return(b,0,1)
        else:
            gcd,s,t = eea(b,a%b)
            s = s-((a//b) * t)
            return(gcd,t,s)
    
    #Multiplicative Inverse
    def mult_inv(e,r):
        gcd,s,_=eea(e,r)
        if(gcd!=1):
            return None
        else:
            return s%r
    
    if p == q:
        raise Exception("Arguments should be different numbers")

    if not (isprime(p) and isprime(q)):
        raise Exception("Arguments should be prime numbers")

    n = p * q

    phi = (p-1)*(q-1)

    e = 2
    while(e<phi):
        if (math.gcd(e, phi) == 1):
            break
        else:
            e += 1

    d = mult_inv(e,phi)
    
    return [n, e, d]

if __name__ == "__main__":
    p, q = [53, 59]
    print(f"Launching algoritm with\n  'p' = {p}\n  'q' = {q}\n")
    n, e, d = computeNED(p, q)
    print(f"Computed:\n  'n' = {n}\n  'e' = {e}\n  'd' = {d}")