# 2. შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. ლუწ ინდექსებზე მყოფი სახელები გადაიყვანეთ uppercase-ში, ხოლო კენტ ინდექსებზე მყოფნი კი lowercase-ში.

def convert(names):
    converted = []

    for i in range(len(names)):
        if i % 2 == 0:
            converted.append(names[i].upper())
        else:
            converted.append(names[i].lower())
            return converted
name = ["zuka","bob","luka","guram"]

converted = convert(name)

print(converted)