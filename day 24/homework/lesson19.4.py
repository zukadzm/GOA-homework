# 4. მომხმარებელს შემოატანინეთ სიტყვა და შემდეგ განიხილეთ ამ სიტყვის ყველა ასო. lowercase გადააკეთეთ uppercase-ად, ხოლო uppercase კი lowercase-ად.

name = (input("Enter any words: "))


for i in name:
    if name.upper():
        print(name.lower())
    else:
        if name.lower():
            print(name.upper())
        
print(name)