# https://www.codewars.com/kata/58df62fe95923f7a7f0000cc

def palindrome(num):
    if type(num) != int or num < 0:
        return "Not valid"

    nebismieri = str(num)
    datvla = 0

    for i in range(len(nebismieri)):
        for j in range(i + 2, len(nebismieri) + 1):
            if nebismieri[i:j] == nebismieri[i:j][::-1]:
                datvla += 1

    return datvla

