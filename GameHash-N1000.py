## ---------------------------------------------------------------------------------
## GameHash-N1000.py
## Introducing the N1000 series GameHash generator! 
## "Don't call it gambling, it's calculated risk taking."
##                                               ~jacksonova
##
## The input file should have each line in the format of "serverSeed,clientSeed\n"
##
## As of February 2023, the resulting hash matches with single implementation games
## on Stake.com and Stake.US - i.e. Dice, Limbo, Baccarat, Wheel, Roulette, & Diamonds
##
## Visit the wiki for more info: https://github.com/nucleare/GameResultsGenerator/wiki
## Copyright (c) 2023 Dafordo Co. (DBA) - Join Discord @ https://discord.gg/wqZfjPUv73
## Released under an MIT License
## ---------------------------------------------------------------------------------

import hmac
import hashlib
import binascii
import sys

## Using Stake's "RNG" known as the byte_generator function
def byte_generator(serverSeed, clientSeed, nonce, cursor):
    current_round = cursor // 32
    current_round_cursor = cursor
    current_round_cursor -= current_round * 32

    while True:
        hmac_result = hmac.new(serverSeed.decode().encode(), digestmod=hashlib.sha256)
        hmac_result.update(f"{clientSeed}:{nonce}:{current_round}".encode())
        buffer = hmac_result.digest()

        ## The float caluclation below is not used for the single implementation hashes, but includes for consistency
        while current_round_cursor < 32:
            yield buffer[current_round_cursor]
            current_round_cursor += 1
        current_round_cursor = 0
        current_round += 1

## Remind users that an input file and output file is needed as arguments        
def main():
    if len(sys.argv) < 3:
        print("Please provide the input file name and output file name as command line arguments")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    with open(input_file) as f:
        data = f.readlines()

    with open(output_file, 'w') as f:
        for line in data:
            serverSeed, clientSeed = line.strip().split(',')
            serverSeed = serverSeed.encode()
            for nonce in range(1, 1001):        ## Sets the total number of nonce outcomes to produce
                cursor = 0
                gen = byte_generator(serverSeed, clientSeed, nonce, cursor)
                output = [next(gen) for i in range(32)]
                result = binascii.hexlify(bytes(output))
                f.write(f"{serverSeed.decode()},{clientSeed},{nonce},{result.decode()}\n")

if __name__ == "__main__":
    main()
