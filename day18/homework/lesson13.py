# მომხმარებელს შემოატანინეთ სახელი. თქვენი დავალებაა, რომ შეადაროთ სახელი მის lowercase ვარიანტთან == ოპერატორის გამოყენებით.

name = input("Enter your name: ").lower()
print(name)

# მომხმარებელს შემოატანინეთ სიტყვა. for ციკლის გამოყენებით შეამოწმეთ მისი თითოეული ასო და თუ რომელიმე იქნება lowercase, მაშინ მომხმარებელს შემოატანინეთ სიტყვა თავიდან. ასევე დაბეჭდეთ თუ რამდენჯერ მოუწია მომხმარებელს სიტყვის შემოტანა - counter.


name2 = input("Say any words: ")

if name2.lower():
    print("Try again")
else:
    pass


# მომხმარებელს შემოატანინეთ სიტყვა. თქვენი დავალებაა, რომ ლუწ ინდექსებზე მყოფი ასოები გარდაქმნათ uppercase-ად, ხოლო კენტ ინდექსებზე მყოფები lowecase-ად, საბოლოოდ კი დაბეჭდოთ შედეგი.

name3 = input("Type something: ")
if name3 % 2 == 0:
    name3.upper()
else:
    name3.lower()

print(name3)



# ცვლადში შეინახეთ თქვენი სახელი. თუ მისი სიგრძე აღემატება ხუთს, გარდაქმენით მთლიანი სიტყვა uppercase-ად, სხვა შემთხვევაში კი lowecase-ად. საბოლოოდ კი დაბეჭდეთ გარდაქმნილი სახელი.

name = ("ZUKA").lower()
print(name)


# სიაში შეინახეთ თქვენი სახელი და გვარი. capitalize მეთოდის გამოყენებით მასივის ყველა ელემენტზე მოახდინეთ მუშაობა და ბოლოს დაბეჭდეთ უკვე შეცვლილი სია.


name = ("zuka,qoridze")
print(name[0].capitalize())
print(name[5].capitalize())


# მომხმარებელს შემოატანინეთ სახელი, შემდეგ კი გვარი. შეინახეთ ისინი სიაში და წინა დავალების მსგავსად იმუშავეთ ყველა ელემენტზე capitalize მეთოდით. თქვენი დავალებაა, რომ გამოიტანოთ მომხმარებლის ინიციალები სთრინგის სახით. test case: input) "Data", "Tezelashvili" -> output: "D.T"


name = input("Enter your name: ")
surname = input("Enter yout surname: ")

print(name[0].capitalize())
print(surname[0].capitalize())



# მოხმარებელს შემოატანინეთ სიტყვა და საძიებელი ასო. თქვენი დავალებაა, რომ სიტყვაში პირველივე შემხვედრი ამ ასოს ინდექსი დაბეჭდოთ, არ არსებობის შემთხვევაში კი უბრალოდ -1.


name2 = input("Type any word and any number: ")
print(name2.find(''))



# თქვენი დავალებაა, რომ შექმნათ იგივე ლოგიკა რაც წინა დავალებაში გქონდათ, უბრალოდ find მეთოდის გარეშე - გამოიყენეთ ციკლი. საბოლოოდ შეამოწმეთ ორივე ალგორითმის მუშაობა და შეამოწმეთ იგივე შედეგებს თუ მიიღებთ.


def find_(collection, value_to_find):
    for index in range(len(collection)):
        if collection[index] == value_to_find:
            return index
        

# სიაში შეინახეთ თქვენი ოჯახისწევრების სახელები. თქვენი დავალებაა, რომ ისინი ერთმანეთთან დააკავშიროთ "-"თი და დაბეჭდოთ ერთი სთრინგის სახით.

lists = ["გია","ლელა","ლიკა","გიგი","ზუკა"]

new_lis ="-".join(lists)
print(lists)
print(new_lis)


#მომხმარებელს შემოატანინეთ ხუთი სიტყვა და ყველა მათგანი დაამატეთ ერთ სიაში. შემდეგ შეეკითხეთ შესაერთებელი მნიშვნელობა, მაგ. "-" / "+" / "^" და ა.შ. თქვენი დავალებაა რომ იმუშავოთ სიაზე: მხოლოდ ლუწ ინდექსიან სიტყვებს დაუწეროთ ბოლოში ეს დასაკავშირებელი მნიშვნელობა და შემდეგ დაამატოთ საერთო სთრინგში. საბოლოოდ კი უნდა დაბეჭდოთ ეს სთრინგი. Test case: input) ("python", "html", "css", "js", "git"), "+" -> output) "python+css+git"


name = input("(Type 5 program leangue): ")

for i in name:
    new_list ='-'.join(name)
    new_list1 =" + ".join(name)

print(new_list)
print(new_list1)



# დავალება: ახალ მეთოდებიდან თითოეულზე - lower, upper, capitalize, find, join მოიფიქრეთ ერთი ალგორითმი თქვენით. ეს ალგორითმი უნდა იყოს გამოსადეგი და ბევრ სიტუაციაზე იყო მოსახერხებელი
# დავალება: გაკვეთილის ჩანაწერს უყურეთ თავიდან და გაიაზრეთ ახალი მასალა

names = input("Enter your name: ").lower()
surname = input("Enter your surname: ").upper()
age = input("Enter your real age: ").capitalize()
from_ = input("Where you from: ").find("g")

new_lis ="".join(names,surname,age,from_)
print(names,surname,age,from_)