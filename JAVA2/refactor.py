def f(l, t): 
    r = []
    for i in range(len(l)):
        if l[i]["t"] == t:
            r.append(l[i])
            return r


items = [ {"id": 1, "t": "book", "price": 20}, {"id": 2, "t": "food", "price": 10}, {"id": 3, "t": "book", "price": 15}, {"id": 4, "t": "food", "price": 5} ]
books = f(items, "book")

#refactor code

def filter_items(items, t):
    return [item for item in items if item["t"] == t]

# add case to test
items = [ {"id": 1, "t": "book", "price": 20}, {"id": 2, "t": "food", "price": 10}, {"id": 3, "t": "book", "price": 15}, {"id": 4, "t": "food", "price": 5} ]
books = filter_items(items, "book")
print(books)

