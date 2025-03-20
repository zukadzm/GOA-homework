# 1) https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

def row_weights(array):
    sumFirst = sum(array[::2])
    sumSecond = sum(array[1::2])
    return sumFirst, sumSecond


# 2) https://www.codewars.com/kata/563cf89eb4747c5fb100001b/python

def remove_smallest(numbers):
    if numbers == []:
        return numbers
    elif len(numbers) == 1:
        return []

    else:
        removee = numbers[::] # ავირჩიეთ სიის ყველა ელემენტი
        removee.remove(min(numbers))
        return removee
    


# 3) https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python 
# js
# function humanReadable(seconds) {
#   return [
#     ('0' + Math.floor(seconds / 3600)).slice(-2),
#     ('0' + Math.floor(seconds % 3600 / 60)).slice(-2),
#     ('0' + seconds % 60).slice(-2)
#   ].join(':');
# }


# 4) https://www.codewars.com/kata/52449b062fb80683ec000024 


def generate_hashtag(s):
    output = "#"
    
    for word in s.split():
        output += word.capitalize()
    
    return False if (len(s) == 0 or len(output) > 140) else outpu
