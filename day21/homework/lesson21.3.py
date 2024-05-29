# 3) def keyword'ის გამოყენებით შექმენით len()'ის მსგავსი ფუნქცია ( ფუნქცია რომელიც გამოიტანს რამდენი ელემენტია list'ში).

def mylen(character):
    lenght = 0

    for item in character:
        lenght = lenght + 1
        return lenght
    
print(mylen("data"))