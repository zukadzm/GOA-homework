# 4) გატესტეთ insert, pop, len, append და ახსენით თქვენი სიტყვებით თუ რას აკეთებს.


# insert ამატებს სიაში ჩვენს შეტანილ მნიშვნელობას
insrt = ["Zuka", "Luka", "Tornike"]

insrt.insert(2, "Gio")                

print(insrt)

# pop შლის ელემენტს სიიდან

pops = ["Vashli", "Sazamtro", "Alucha"]

pops.pop(2)       # თუ pop-ს არ გადავეცით არგუმენტი ის ამოშლის ბოლო ელემენტს სიიდან.

print(pops)

# len - lenght, ზომავს, ითვლის სიიაში მოცემულ მნიშვნელობებს ინდექსის მიხედვით.

lens = ["Spiderman", "Thor", "Batman"]

print(len(lens))

# append - ამატებს ელემენტს სიის ბოლოში

appends = ["Zedazeni", "Kokakola", "Fanta"]

appends.append("Rze")

print(appends)