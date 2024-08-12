# codewars

# 7kyu
# 1) def max_multiple(divisor, bound):
#     return bound - (bound % divisor)


# 2) def get_issuer( _n ):
    # n = str(_n)
    # if (n[:2] == '34' or n[:2] == '37') and len(n) == 15:
    #     return 'AMEX'
    # elif n[:4] == '6011' and len(n) == 16:
    #     return 'Discover'
    # elif 50 < int(n[:2]) < 56 and len(n) == 16:
    #     return "Mastercard"
    # elif int(n[0]) == 4 and (len(n) == 13 or len(n) == 16):
    #     return "VISA"
    # else:
    #     return 'Unknown'

# 3) def switcheroo(string):
    # return ''.join( [ 'a' if s=='b' else 'b' if s=='a' else s for s in string ] )


# 4) def number(bus_stops):
    # return sum([stop[0] - stop[1] for stop in bus_stops])

# 6kyu

# 5) def unique_in_order(iterable):
    # res = []
    # for item in iterable:
    #     if len(res) == 0 or item != res[-1]:
    #         res.append(item)
    # return res
            

# 6) def order(s):
    # z = []
    # for i in range(1,10):
    #     for j in list(s.split()):
    #         if str(i) in j:
    #            z.append(j)
    # return " ".join(z)