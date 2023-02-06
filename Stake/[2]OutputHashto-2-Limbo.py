## This script will output the results for Limbo based on the algorithms used by Stake.com and Stake.US
## It is intened to be used with the output file created by GameHash-N1000.py
## Otherwise you will need to set up an input file with 4 sets of data, delimited by comma, and have the
## hash to base game results up on in the 4th succession, while this will perform calculation
## for each line in that file. If you would prefer to use a single script to take the
## server seed and client seed to produce a result, see the 'Other' directory.

import hashlib
import os
import sys
import math

def calculate_game_result(A, B, C, D):
    F = (A / (256 ** 1)) + (B / (256 ** 2)) + (C / (256 ** 3)) + (D / (256 ** 4))
    reduced_F = int(F * 16777216)
    game_result = 16777216 / (reduced_F + 1) * (1 - 0.01)
    return math.floor(game_result * 100) / 100

def process_output_hash(output_hash):
    # Convert the first 8 characters of the output hash into pairs of hexadecimal numbers
    hex_pairs = [output_hash[i:i+2] for i in range(0, len(output_hash), 2)]
    # Convert each pair of hexadecimal numbers into integers
    int_pairs = [int(pair, 16) for pair in hex_pairs]
    A, B, C, D = int_pairs[:4]
    return A, B, C, D, calculate_game_result(A, B, C, D)

def process_input_file(input_file, output_file):
    with open(input_file) as f:
        with open(output_file, 'w') as g:
            g.write("Casino Seed, First 4 Bytes, Limbo Result\n")
            for line in f:
                data = line.strip().split(',')
                output_hash = data[3]
                A, B, C, D, game_result = process_output_hash(output_hash)
                g.write(f"{output_hash},    Seed to Bytes: {A}, {B}, {C}, {D},   Limbo Result: {game_result}\n")

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    process_input_file(input_file, output_file)
