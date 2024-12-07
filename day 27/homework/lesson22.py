# 1. შექმენით ფუნქცია, რომელსაც გადაეცემა რიცხვების კოლექცია. თქვენ უნდა განიხილოთ მთლიანი კოლექცია: თუ რიცხვი იქნება მთელი - გაამრავლეთ ორზე, ხოლო თუ რიცხვი იქნება ათწილადი - გაამრავლეთ ოთხზე. ყველა რიცხვი დაამატეთ ახალ სიაში და დააბრუნეთ ეს სია.


def whole(number):
    result = []
    for i in number:
        if number == list(number):
            result.append(number * 2)
        else:
            result.append(number * 4)
    return result

result1 = whole([10,5.5,20,30])
print(result1)
