# შექმენით ფუნქცია სახელად manual_max, რომელსაც შესაძლოა გადაეცეს მთელი რიცხვების სია - გაიხსენეთ function default argument. თუ ფუნქციას სია გადაეცემა, დააბრუნეთ ამ სიის მაქსიმალური მნიშვნელობა, არ გამოიყენოთ max. თუ ფუნქციას არ გადაეცემა სია, მაშინ იმუშავეთ 1-იდან 10-ის ჩათვლით არსებული მთელი რიცხვების სიაზე.



def find_max(list):
  
  
  max = list[0]
  
  
  for number in list:
    if (number > max):
      max = number 
  
  return max


list = [3,7,5,8,4,9]


max = find_max(list)


print("Max:", max)
