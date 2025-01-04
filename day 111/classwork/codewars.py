# 1) https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

# def solution(s):
#     result = []
#     if len(s) % 2:
#         s += '_'
#     for i in range(0, len(s), 2):
#         result.append(s[i:i+2])
#     return result

# 2)  https://www.codewars.com/kata/5266876b8f4bf2da9b000362

# def likes(names):
    # formats = {
    #         0: "no one likes this",
    #         1: "{} likes this",
    #         2: "{} and {} like this",
    #         3: "{}, {} and {} like this",
    #         4: "{}, {} and {others} others like this"
    #     }
    # n = len(names)
    # return formats[min(n,4)].format(*names, others=n-2)

# 3) https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

# def persistence(n):
#     n = str(n)
#     count = 0
#     while len(n) > 1:
#         p = 1
#         for i in n:
#             p *= int(i)
#         n = str(p)
#         count += 1
#     return count


#  4) https://www.codewars.com/kata/541c8630095125aba6000c00

# def digital_root(n):
#     return n%9 or n and 9 