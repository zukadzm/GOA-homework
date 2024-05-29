# 3. შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი დიდი წინადადება. ამ წინადადებაში, ყველა სიტყვა დაიწყეთ დიდი ასოთი და დააბრუნეთ წინადადება ამ სახით.

list_names = ["zuka","luka","gurami"]


new_list = []
for name in list_names:
    new_name = name.capitalize()
    new_list.append(new_name)

print(new_list)