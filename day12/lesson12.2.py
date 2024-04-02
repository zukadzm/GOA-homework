# 2) შექმენით ფუნქცია რომელსაც გადაეცემა list = ["name1" , "name2" , "name3"....] შემდეგ მომხმარებელს კითხეთ რომელი ინდექსის შეცვლა სურს და ამის მიხედვით შეცვალეთ ის კონკრეტული ინდექსი თქვენი სასურველი სტრინგით და ბოლოს შეაერთეთ join() ფუნქციის მეშვეობით 


lis1 = ["Luka" , "Zuka" , "Nika" ,] 
lists_ = input("Which index do you want to change to list2?: ")

for i in lists_:
  if lists_ == 1 or 2 or 3 or 4:
    lis1.pop()
new_list = " ".join(lis1)
print(lis1)