#მომხმარებელს შემოატანინეთ სახელი, გვარი, ასაკი და საცხოვრებელი ადგილი. თითოეული მათგანი append-ის გამოყენებით დაამატეთ სიაში. slicing-ის გამოყენებით დაბეჭდეთ 1: სახელი, გვარი, 2: გვარი, ასაკი, 3: სახელი, გვარი, ასაკი 4: გვარი, ასაკი, საცხოვრებელი ადგილი.

name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = int(input("Enter your age: "))
fromm = input("Enter where your from: ")

allname = name,surname,age,fromm

lisnt = []

lisnt.append(allname)
print(lisnt)