# 1) https://www.codewars.com/kata/58a6841442fd72aeb4000080

def similarity(a, b):
    a, b = set(a), set(b)
    return len(a & b) / len(a | b)