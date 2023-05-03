from z3 import *
import statistics

# Define the constraint of 1 to 100 
# can be changed to accomodate higher ranges
MIN_VALUE = 1
MAX_VALUE = 100

# Define the first 10 generated numbers
# replace these numbers with your 10 numbers
seq = [42, 45, 53, 67, 12, 80, 79, 14, 29, 87]

# Infer the mean and standard deviation of the distribution
mean = statistics.mean(seq)
stdev = statistics.stdev(seq)

# Define the z3 solver
s = Solver()

# Define 10 real variables for the new random numbers
x = [Real(f'x{i}') for i in range(10)]

# Add the constraint that the new random numbers are within the specified range
for i in range(10):
    s.add(x[i] >= MIN_VALUE / MAX_VALUE)
    s.add(x[i] <= MAX_VALUE / MAX_VALUE)

# Add the constraint that the new random numbers have the same mean and standard deviation as the inferred distribution
s.add(And([Sum(x) == 10*mean] + [Sum([(x[i] - mean)**2 for i in range(10)]) == 10*stdev**2]))

# Check if the constraints are satisfiable and print the new random numbers
if s.check() == sat:
    m = s.model()
    new_seq = [int(m.evaluate(x[i]).as_fraction() * MAX_VALUE) for i in range(10)]
    print("The next 10 numbers in the sequence are:")
    print(new_seq)
else:
    print("Failed to find a solution.")
