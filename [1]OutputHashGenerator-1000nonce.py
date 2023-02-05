import hmac
import hashlib
import binascii
import sys

def byte_generator(serverSeed, clientSeed, nonce, cursor):
    current_round = cursor // 32
    current_round_cursor = cursor
    current_round_cursor -= current_round * 32

    while True:
        hmac_result = hmac.new(serverSeed.decode().encode(), digestmod=hashlib.sha256)
        hmac_result.update(f"{clientSeed}:{nonce}:{current_round}".encode())
        buffer = hmac_result.digest()

        while current_round_cursor < 32:
            yield buffer[current_round_cursor]
            current_round_cursor += 1
        current_round_cursor = 0
        current_round += 1

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
            for nonce in range(1, 1001):
                cursor = 0
                gen = byte_generator(serverSeed, clientSeed, nonce, cursor)
                output = [next(gen) for i in range(32)]
                result = binascii.hexlify(bytes(output))
                f.write(f"{serverSeed.decode()},{clientSeed},{nonce},{result.decode()}\n")

if __name__ == "__main__":
    main()

// To use this script, just run the following command after you've created the input file as instructed below.
//
//      python OutputHashGenerator-1000nonce.py InputFile.txt OutputFile.txt
//
//
// The input file should have each line in the format of "serverSeed,clientSeed\n" and the output file will be in the format of "serverSeed,clientSeed,nonce,result\n"
// This Script will produce the output hash for the first 1000 nonces, which is the outpput hash used
// By turning the hash into bytes, then bytes to numbers
// Which means it works for Dice, Limbo, Wheel, Baccarat, Roulette, and Diamonds on Stake.com and Stake.US
//
// This is a proof of concept Script, so having it produce the actual results for the games above is the next step
// However, generating the hashes separately first were necessary for prepairing data to be used by an AI training model