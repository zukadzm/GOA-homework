#2) შექმენით ორი ცვლადი name - password სადაც მომხარებელს შემოატანიებთ სახელს და პაროლს და ასევე შექმენით მესამე ცვლადი repeat_password სადაც თუ მომხმარებელის შეყვანილი პაროლი არ დაემთხვევა პირველად შეყვანილ პაროლს დაუწერეთ რომ პაროლი არასწორია თუარადა დაუწერეთ "თქვენ წარმატებით გაიარეთ რეგისტრაცია" - გამოიყენეთ if - else

name = input("Enter your name: ")
password = input("Create password: ")
repeat_password = input("Repeat your password: ")

if password == repeat_password:
    print("Register sucsesful")
else:
    print("Wrong password")