

def highest_rank(arr):
    return max(sorted(arr)[::-1], key = arr.count())