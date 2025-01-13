# 1) https://www.codewars.com/kata/529b418d533b76924600085d
# def to_underscore(strr):
    # a=""
    # f=[]
    # z=[]
    # m=isinstance(strr, int)
    # if m==True:
    #     return str(strr)
    # for i in strr:
    #     if i.isupper():
    #         a+=" "+i
    #     if i==i.lower():
    #         a+=i
    # l=a.lower()[1:]
    # return l.replace(" ","_")
    
# 2) https://www.codewars.com/kata/580a4734d6df748060000045

# def is_sorted_and_how(arr):
    # if arr == sorted(arr):
    #     return 'yes, ascending' 
    # elif arr == sorted(arr)[::-1]:
    #     return 'yes, descending'
    # else:
    #     return 'no'


# 3) https://www.codewars.com/kata/59dc8288fc3c49cc3f000039 

# function sort(initialArray, sortingArray) {
#     const arr = [];

#     for (let i = 0; i < sortingArray.length; i++) {
#         arr[sortingArray[i]] = initialArray[i];     
#     }

#     return arr;
# }