# GameResultsGenerator
Bulk generation of game outcomes by supplying a list of server &amp; client seed combinations.

## Overview
This is a work in progress consisting of scripts that are made to generate the outcome of popular casino games using the provable fair system. It allows you to generate thousands of game outcomes given a server seed and client seed in .txt formaat that is can be easily imported into a .csv file. The original intention was to create easily importable data for an AI learning/prediction model and thus outputs attempt to preserve as much of the contributing data as possible (for what was perceived to be useful in using with an AI learning model. It is NOT intended to be a provably fair checker as currently finished scripts simply generate the first 1000 nonces of results and was meant for those seeking to create a consistent datasets of their game outcomes.



## To Use

Simply run using Python (some libraries required, such as `crypto-js`, `crypto`, `hashlib`, and/or `os`

```
python {script.py} {input_file.txt} {output_file.txt}
```
Or if they're in JavaScript use `npm` or `node-js`

```
node {script.js}
```

### Explained

Some sites use different implementations of HMAC-SHA256, but in general, function more or less the same in using the output of their implementation to serve as the base for determine an output of a game.

For each verifiable bet, a client seed, a server seed, a nonce and a cursor are used as the input parameters for the random number generation function. This function utilises the cryptographic hash function HMAC_SHA256 to generate bytes which are then used as the foundation for how a site generates a provably fair random outcomes on their platform.

For Example, below is the code use by [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)
```
    // HMAC function used to output provided inputs into bytes
    const hmac = createHmac('sha256', serverSeed);
    hmac.update(`${clientSeed}:${nonce}:${currentRound}`);
    const buffer = hmac.digest();
```
While below is the code used by [Wolf.bet](https://wolf.bet/?c=talk2them)
```
  const hash = CryptoJS.HmacSHA256(server_seed,`${client_seed}_${nonce}`,).toString();
```
Both use HMAC-SHA256 but the way in which they apply it are different, beyond just the module it relies on from JavaScript. This is why the scripts need to be made specific to certain sites at times and may not necessarily provide the same results for every online casino. It is also what proved to be challenging, for me at least, in trying to get the scripts to match whatatever hash the provably fair checker of a site would produce. This is why we start with producing the same hash first, instead of going straight for matching game results.


# Variations

## Non-Incrementing Cursor
The cursor is only iterated over when the game being played requires the generation of more than 8 (32 bytes / 4 bytes) possible outcomes. For example: when you need to use more than 8 cards in a game of Blackjack.

The cursor starts as 0 and gets increased by 1 every time the 32 bytes are returned by the HMAC_SHA256 function. These games don't require more than 8 random numbers to be generated for the game events, so the curser does not increment as there is no need to generate any additional possible game outcomes and is therefore set to 0.

*Basic Output Hash Generator* - The base RNG for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass) games that do not require more than 8 random numbers to be generated for the game events. This script simply generates the output hashes used to determine game results before conversion to bytes. 

These hashes can be used in conjunction with a scripts for Dice, Limbo, Wheel, Baccarat, Roulette, and Diamonds for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

### Game Outcome Scripts

*Limbo* - Uses this script on the output file from the Basic Output Hash Generator. Takes on the process of converting the first 4 byte pairs of the Hexidecimal hash and converts them to 4 Unsigned Integers and applies the Limbo game algorithm as found on [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

**Dice** - _Pending_

**Wheel** - _Pending_

**Roulette** - _Pending_

**Diamonds** - _Pending_

## Games with more than 1 incremental number
These games will require, most likely, their own unique script due to the game mechanics of each individual game.

 - Hilo (Unlimited to cover required amount of cards)
 - Keno (2 increments for every game due to 10 possible outcomes)
 - Mines (3 increments per game for 24 possible bomb locations)
 - Plinko (2 increments per game to cover possible 16 decisions)
 - Blackjack (Unlimited to cover required amount of cards)
 - Video Poker (7 increments to generate 52 possible cards in a full deck)
 - Diamond Poker (2 increments to cover 10 diamonds: 5 per player/dealer)
 - Slots (The incremental number is only utilised for bonus rounds)
 

 
 ***
 
 ### Monetary Contributions
 In addition to crypto address sent donations, monetary contributions using a credit card or bank card is availble through the purchase of research hours found [here](https://checkout.square.site/merchant/9EN1DRFRT1369/checkout/XYAXX4HRDPU7F4DPI4FKYJ77). To view the type of research, the progress, and to view the advantages it hopes to offer, an invite to the private repository is required to help safeguard some of the projects currently under way. Requests can be sent by submitting a an issue [here](https://github.com/nucleare/GameResultsGenerator/issues) using the title "Lacking Data" and submitting your either your preferred contact method or a message requesting the link as a temporary message until the topic is marked as hidden. The issue topic will be immediately hidden upon receipt and can be considered as under review once hidden, but note that the issue topic will remain public until viewed and/or received by the repository owner, so keep that in mind (and consider why both options have been offerred).
 
Alternatively, link the link for the CC payment method can be accessed using the following QR code:
![QRcode](data:image/png;base64, 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)

Or 

BTC [bc1qr2ymf0n0hn8m4ymewk8mccf7j43srhxycvwsjh](bitcoin:BC1QR2YMF0N0HN8M4YMEWK8MCCF7J43SRHXYCVWSJH?label=GitHub%20DOnations)
ETH - 0xeA9Ea1678e94c53F25E49D6eC6b175A86796dCA3
