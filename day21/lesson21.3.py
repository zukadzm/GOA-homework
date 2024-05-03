# 3) def keyword'ის გამოყენებით შექმენით len()'ის მსგავსი ფუნქცია ( ფუნქცია რომელიც გამოიტანს რამდენი ელემენტია list'ში).

def mylen(character):
    lenght = 0

    for i in(character):
        lenght += 3
        return lenght
    
print(mylen("data"))