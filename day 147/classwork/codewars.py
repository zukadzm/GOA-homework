# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python
def even_numbers(arr,n):
    result = []
    for i in arr[::-1]:
        if i % 2 == 0:
            result.append(i)
            if len(result) == n:
                return result[::-1]