# Function to calculate the nth Fibonacci number
# The Fibonacci sequence starts with 0 and 1
# Each subsequent number is the sum of the two preceding ones
# Example: 0, 1, 1, 2, 3, 5, 8, 13, ...
# Parameter: n (int) - the position in the sequence (0-indexed)
# Returns: the nth Fibonacci number
def fibonacci(n):
    if n < 0:
        raise ValueError("Input should be a non-negative integer.")
    elif n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b

def fibonacci_sequence(n):
    if n < 0:
        raise ValueError("Input should be a non-negative integer.")
    sequence = []
    for i in range(n):
        sequence.append(fibonacci(i))
    return sequence

# Test cases
print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(2))  # 1
print(fibonacci(3))  # 2
print(fibonacci(4))  # 3
print(fibonacci(5))  # 5
print(fibonacci(6))  # 8
print(fibonacci(7))  # 13
print(fibonacci(8))  # 21
print(fibonacci(9))  # 34
print(fibonacci(10))  # 55

print(fibonacci_sequence(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]