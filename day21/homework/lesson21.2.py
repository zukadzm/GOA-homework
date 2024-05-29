# 2) `შექმენით ფუნქცია, სახელად find_index, რომელსაც გადაეცემა სთრინგი და საპოვნელი ასო. თქვენი დავალებაა, რომ გადაცემულ სთრინგში არსებული ასოს ინდექსი დააბრუნოთ.

def find_(word, find_char):
    for index in range(len(word)):
        if word[index] == find_char:
            return index
        
print(find_("Zuka", 'u'))