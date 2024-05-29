# გადმოგეცემათ რიცხვებით სავსე სია და თქვენ უნდა დააბრუნოთ ამ სიის ელემენტების საშუალო არითმეტიკული

def average_arithmetic(number_list):
    all = sum(number_list)
    result = all // len(number_list)
    print(result)

average_arithmetic([1,2,3])