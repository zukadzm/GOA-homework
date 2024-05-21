# codewars
def get_count(sentence):
    to_count = ["a", "e", "i", "o", "u"]
    res = 0
    for i in to_count:
        for j in sentence:
            if i.lower() == j.lower():
                res += 1
    return res



def square_digits(num):
    to_return = ""
    for i in str(num):
        to_return += str(int(i) ** 2)
    return int(to_return) 



def filter_list(l):
    result = []
    for element in l:
        if type(element) == int:
            result.append(element)
    return result     


def high_and_low(numbers):
    numlist = numbers.split()
    result = []
    for i in numlist:
        result.append(int(i))
    return str(max(result)) + " " + str(min(result))