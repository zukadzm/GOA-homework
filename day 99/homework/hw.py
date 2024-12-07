# 1)def count(string):
  
    # return {i: string.count(i) for i in string}

# 2) def order(s):
    # z = []
    # for i in range(1,10):
    #     for j in list(s.split()):
    #         if str(i) in j:
    #             z.append(j)
    # return " ".join(z)

# 3) def reverse_words(text):
    # x = text.split(" ")
    # listn = []
    
    # for i in x:
    #     listn.append(i[::-1])
    # return " ".join(listn)

# 4) def solution(s):
    # result = []
    # if len(s) % 2:
    #     s += '_'
    # for i in range(0, len(s), 2):
    #     result.append(s[i:i+2])
    # return result
        
# 5) def sep_str(s):
    # S = s.split()
    # l = S and max(len(w) for w in S) or 0
    # R = [[] for _ in range(l)]
    # for i in range(l):
    #     for w in S: R[i].append( i<len(w) and w[i] or '')
    # return R