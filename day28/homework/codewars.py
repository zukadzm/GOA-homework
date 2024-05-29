def square_digits(num):
    to_return = ""
    for i in str(num):
        to_return += str(int(i) ** 2)
    return int(to_return) 