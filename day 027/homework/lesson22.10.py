# 10. შექმენით ფუნქცია, რომელსაც გადაეცემა კოლექცია. თქვენი დავალებაა, დააბრუნოთ ახალი კოლექცია, სადაც გვექნება ისეთი ელემენტები, რომლებიც საწყის კოლექციაში მარტო ერთჯერ გვხვდება.

def element(collection):
    element1 = []
    for i in collection:
        if collection.count(i) == 1:
          element.append(i)
    return element1

print(element[1,1,2,2,3,3,4,4,5,6,6])