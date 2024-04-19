# შექმენით ფუნქცია სახელად manual_max, რომელსაც შესაძლოა გადაეცეს მთელი რიცხვების სია - გაიხსენეთ function default argument. თუ ფუნქციას სია გადაეცემა, დააბრუნეთ ამ სიის მაქსიმალური მნიშვნელობა, არ გამოიყენოთ max. თუ ფუნქციას არ გადაეცემა სია, მაშინ იმუშავეთ 1-იდან 10-ის ჩათვლით არსებული მთელი რიცხვების სიაზე.

# def find_max(list):
    
#     max = list[0]

#     for number in list:
#         if (number  >  max):
#             max = number

#         return max
    
# list = [3,7,5,8,4,9]

# max = find_max(list)

# print("Max", max)






def find_max(list):
  
  # Assume that the first element in the list is the maximum value in the list
  max = list[0]
  
  # Go through the remaining elements in the list, and whenever a value is 
  # encountered that is greater than the current max value, make this value 
  # the new max value.
  for number in list:
    if (number > max):
      max = number 
  
  # By the end of the above loop max will contain the largest value in the 
  # list and we return that value from the function
  return max

# An example list where 9 is the max value
list = [3,7,5,8,4,9]

# Call the find_max() function with the list as an argument, store the max value
# returned into max
max = find_max(list)

# Print out the max value that was found in the list
print("Max:", max)
