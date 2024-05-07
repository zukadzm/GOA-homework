# 9. შექმენით ფუნქცია, რომელსაც გადაეცემა ორი სია. თქვენი დავალებაა, გააერთიანოთ ეს ორი სია და დააბრუნოთ ერთი დიდი სიის სახით.

def combine_list(list1,list2):
    combine_list1 = list1 + list2
    return combine_list
print(combine_list([1,2,3,4,5],["a","b","c"]))