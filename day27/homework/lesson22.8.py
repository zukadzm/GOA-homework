# 8. შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. თქვენი დავალებაა, დააბრუნოთ ახალი სია, სადაც არ იქნება ლუწი რიცხვები.


def no_even(numbers):
   odd_number = []

   for i in numbers:
      if i %2 != 0:
         odd_number.append(i)
         return odd_number
   
print(no_even[1,2,3,4,5,6,7,8,9])