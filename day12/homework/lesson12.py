# 1) შექმენით ფუნქცია, რომელშიც გააერთიანებთ იმ ფუნქციებს რაც დღეს ვისწავლეთ (lower(), upper(), capitalize(), find())


def all_(names):
  name = "ZUka".lower()
  name2 = "zukA".upper()
  name3 = "zuka".capitalize()
  name4 = "zuka".find("k")
  for i in name,name2,name3,name4:
    print(i)

all_(__name__)
