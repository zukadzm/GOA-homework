# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python

def even_numbers(arr,n):
  even = []
  for i in arr:
    if i % 2 == 0:
      even.append(i)
  return even[len(even) - n:len(arr)]