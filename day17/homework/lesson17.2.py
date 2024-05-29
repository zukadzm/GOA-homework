# შექმენით ფუნქცია სახელად manual_count: ფუნქციას გადაეცემა სია და ასევე შესაძლოა ელემენტი. როდესაც ფუნქციას ელემენტიც გადაეცემა, თქვენ უნდა დაითვალოთ სიაში ამ ელემენტის რაოდენობა, არ გამოიყენოთ count. როდესაც არ გადაეცემა ელემენტი, მისთვის გამოიყენეთ default მნიშვნელობა და გაუტოლეთ საწყისი სიის საშუალო არითმეტიკულს, ოღონდ მთელი რიცხვის სახით (int(აქ საშუალოს კოდი)).

def manual_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item == item_to_count:
            count = count + 1
    
    return count


names = [True, True, False, True]

print(manual_count(names, True))
