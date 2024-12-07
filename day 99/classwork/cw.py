# 1) https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
# def validate_pin(pin):
    # return len(pin) in (4, 6) and pin.isdigit()

# 2) https://www.codewars.com/kata/5264d2b162488dc400000001
#def spin_words(sentence):
#    return " ".join([x[::-1] if len(x) >= 5 else x for x in sentence.split(" ")])

# 3) https://www.codewars.com/kata/514b92a657cdc65150000006
#def nc(number)
    #return sum([i for i in range(number) if i % 3 == 0 or i % 5 == 0])

# 4) https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
#def highest_rank(arr):
#    return max(sorted(arr)[::-1], key = arr.count)

# 5) https://www.codewars.com/kata/554b4ac871d6813a03000035
#def highest_rank(arr):
    # max_count = None
    # count = 0
    # for i in arr:
    #     if arr.count(i) > count:
    #         count = arr.count(i)
    #         max_count = i
    #     elif arr.count(i) == count:
    #         if i > max_count:
    #             max_count = i
    #         else:
    #             continue
    #     else:
    #         continue
    # return max_count

# 6) https://www.codewars.com/kata/515decfd9dcfc23bb6000006
#def is_valid_IP(strng):
    # splited_arr = strng.split('.')
    # if len(splited_arr) != 4:
    #     return False
    # for i in splited_arr:
    #     if i.isdigit() == False or int(i) < 0 or int(i) > 255:
    #         return False
    # return True