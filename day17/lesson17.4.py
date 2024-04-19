# შექმენით ფუნქცია სახელად manual_min, რომელსაც შესაძლოა გადაეცეს მთელი რიცხვების სია - გაიხსენეთ function default argument. თუ ფუნქციას სია გადაეცემა, დააბრუნეთ ამ სიის მინიმალური მნიშვნელობა, არ გამოიყენოთ min. თუ ფუნქციას არ გადაეცემა სია, მაშინ იმუშავეთ 1-იდან 10-ის ჩათვლით არსებული მთელი რიცხვების სიაზე.


def find_min(list):


    min = list[0]

    
    for number in list:
        if (number < min):
            min = number 


    return min


list = [8,9,4,5,2,6]


print( find_min(list) )
