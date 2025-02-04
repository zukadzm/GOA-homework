# https://www.codewars.com/kata/555eded1ad94b00403000071/train/python

def series_sum(n):
    sum = 0
    for x in range(n):
        sum = sum + 1/(3 * x + 1)
    return "%.2f" % sum