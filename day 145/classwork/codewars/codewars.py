# https://www.codewars.com/kata/56684677dc75e3de2500002b/train/python
def comfortable_word(word):
    b = ''
    for i in word:
        if i in ('q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'):
            a = ('l')
        else:
            a = ('r')
        if a == b:
            return False
        b = a
    return True