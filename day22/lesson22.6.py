# 6. შექმენით ფუნქცია, რომელსაც გადაეცემა სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიაში არსებული დუპლიკატები.

lis = [1,2,2,3,4,5,5,7,9,1,2]

uni = []
dup = []

for element in lis:
    if element not in uni:
        uni.append(element)

    elif element not in dup:
        dup.append(element)

