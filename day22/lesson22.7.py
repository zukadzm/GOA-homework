# 7. შექმენით ფუნქცია, რომელსაც გადაეცემა კოლექცია და საძიებელი სიტყვა. თქვენი დავალებაა, რომ დააბრუნოთ თუ რამდენჯერ გვხვდება საძიებელი სიტყვა კოლექციაში.

def count_occourences(collection, search_term):
    count = 0
    for i in collection:
        if i == search_term:
            count += 1

        return count
    
search_term = 4
print(count_occourences[1,2,2,4,5,6,4,7,8,9,4], 2)