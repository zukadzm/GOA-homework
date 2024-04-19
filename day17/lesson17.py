#შექმენით ფუნქცია სახელად manual_pop, რომელსაც გადაეცემა სია და ასევე შესაძლოა ინდექსი. როდესაც გადაეცემა ინდექსი, სიიდან უნდა ამოიშალოს ამ ინდექსზე მყოფი ელემენტი და დაბრუნდეს სია ამ სახით. თუ ფუნქციას არ გადაეცემა index, მაშინ default მნიშვნელობა უნდა იყოს სიის ბოლო ელემენტი - ზოგადად pop როგორც მუშაობს. ამ დავალებაში რათქმაუნდა pop არ უნდა გამოიყენოთ


def manual_pop(collection, delete_index):
    new_collection = []

    for index in range(0, len(collection)):
        if index != delete_index:
            new_collection.append(collection[index])
    
    return new_collection

names = ["Luka", "Lile", "Nia"]

print(manual_pop(names, 0))