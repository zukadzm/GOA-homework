# 8 KYU:
# 1) https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

def whatday(num):
    if num == 1:
        return 'Sunday'
    elif num == 2:
        return 'Monday'
    elif num == 3:
        return 'Tuesday'
    elif num == 4:
        return 'Wednesday'
    elif num == 5:
        return 'Thursday'
    elif num == 6:
        return 'Friday'
    elif num == 7:
        return 'Saturday'
    else:
        return 'Wrong, please enter a number between 1 and 7'
    

# 2) https://www.codewars.com/kata/57e1e61ba396b3727c000251
def string_clean(s):
    for i in '0123456789':
        s = s.replace(i, '')
    return s

# 7 KYU:

# 1) https://www.codewars.com/kata/593b1909e68ff627c9000186

def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    elif name[2] not in 'aeiou': 
        return name[:3]
    elif name[2] in 'aeiou':
        return name[:4]


# 2) https://www.codewars.com/kata/5874657211d7d6176a00012f

def convert(st):
    result = ""
    for i in st:
        if i == "a":
            result += "o"
        elif i == "o":
            result += "u"
        else:
            result += i
    return result

# 6 KYU:

# 1) https://www.codewars.com/kata/58df62fe95923f7a7f0000cc

def palindrome(num):
    result = []
    for i in num:
        if i[::-1]:
            result.append("Not valid")       
    return result