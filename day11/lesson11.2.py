# 2) შექმენით ფუნქცია რომელიც სიაში ლუწ ინდექსებზე მდგომ რიცხვთა ჯამს დააბრუნებს, შესატანი მონაცემები: [1,2,3,4,5] ---- გამოსატანი მონაცემები (შედეგი):  9 

def even_num(our_list):
    list_even = list ([1,2,3,4,5])
    for i in range(len(our_list)):
        if(our_list[i] % 2) == 0:
            list_even.append(our_list[i])
            return list_even
print([1,2,3,4,5])
print(list)