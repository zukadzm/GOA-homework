# https://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/python

def sort_it(words, n):
    for i in words:
        for k in n:
            if i == k:
                return True
            else:
                return False