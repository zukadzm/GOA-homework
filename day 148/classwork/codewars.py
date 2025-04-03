# 1) https://www.codewars.com/kata/595519279be6c575b5000016

def battle(x, y):
    res1 = 0
    res2 = 0
    for item in x:
        res1 += ord(item.lower()) - ord('a') + 1
    for item in y:
        res2 += ord(item.lower()) - ord('a') + 1
    if(res1 > res2):
        return x
    elif(res2 > res1):
        return y
    else:
        return "Tie!"