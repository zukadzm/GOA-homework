# 1) https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
# def multi_table(number):
    # result = ''
    # for i in range(1, 11):
    #     result += f'{i} * {number} = {i*number}\n'
    # return result.rstrip()


# 2) https://www.codewars.com/kata/5acbc3b3481ebb23a400007d
# def is_flush(cards):
    # result = cards[0][-1]
    # for i in cards:
    #     if i[-1] != result:
    #         return False
    # return True


# 3) https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
# def wave(str):
    # result = []
    # for i in range(len(str)):
    #     if not str[i] == " ":
    #         result.append(str[:i] + str[i].upper() + str[i+1:])
    # return result