# 1) https://www.codewars.com/kata/56582133c932d8239900002e

# def most_frequent_item_count(collection):
    # result = 0
    # for i in collection:
    #     count = collection.count(i)
    #     if count > result:
    #         result = count
    # return (result)

# 2) https://www.codewars.com/kata/540c33513b6532cd58000259

# def sum_args(*a):
    # count = 0
    # for i in a:
    #     count+=i
    # return count

# 3) https://www.codewars.com/kata/52f3149496de55aded000410

# def sum_digits(number):
    # number = abs(number)
    # return_n = 0
    
    # while number > 0:
    #     return_n += number % 10
    #     number = int(number / 10)
        
    # return return_n

# 4)  https://www.codewars.com/kata/5b16490986b6d336c900007d
# def my_languages(results):
    # result =[]
    # while results:
    #     makeMax = max(results, key = results.get)
    #     if results[makeMax] >= 60:
    #         result.append(makeMax)
    #     del results[makeMax]
    # return result