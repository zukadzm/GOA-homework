# https://www.codewars.com/kata/589422431a88082ea600002a

def digit_degree(n):
    count = 0
    while n > 9:
        result = 0
        for i in str(n):
            result += int(i)
        n = result
        count += 1
    return count