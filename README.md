# GameResultsGenerator
Bulk generation of game outcomes by supplying a list of server &amp; client seed combinations.

## Overview
This is a work in progress consisting of scripts that are made to generate the outcome of popular casino games using the provable fair system. It allows you to generate thousands of game outcomes given a server seed and client seed in .txt formaat that is can be easily imported into a .csv file. The original intention was to create easily importable data for an AI learning/prediction model and thus outputs attempt to preserve as much of the contributing data as possible (for what was perceived to be useful in using with an AI learning model. It is NOT intended to be a provably fair checker as currently finished scripts simply generate the first 1000 nonces of results and was meant for those seeking to create a consistent datasets of their game outcomes.

## To Use

Simply run using Python (some libraries required, such as `crypto-js`, `crypto`, `hashlib`, `os`

```
python {script.py} {input_file.txt} {output_file.txt}
```

Or if they're JavaScript use `npm` or `node-js`

```
node {script.js}
```

# Variations

## Non-Incrementing Cursor
The cursor is only iterated over when the game being played requires the generation of more than 8 (32 bytes / 4 bytes) possible outcomes. For example: when you need to use more than 8 cards in a game of Blackjack.

The cursor starts as 0 and gets increased by 1 every time the 32 bytes are returned by the HMAC_SHA256 function. These games don't require more than 8 random numbers to be generated for the game events, so the curser does not increment as there is no need to generate any additional possible game outcomes and is therefore set to 0.

*Basic Output Hash Generator* - The base RNG for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass) games that do not require more than 8 random numbers to be generated for the game events. This script simply generates the output hashes used to determine game results before conversion to bytes. 

These hashes can be used in conjunction with a scripts for Dice, Limbo, Wheel, Baccarat, Roulette, and Diamonds for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

### Game Outcome Scripts

*Limbo* - Uses this script on the output file from the Basic Output Hash Generator. Takes on the process of converting the first 4 byte pairs of the Hexidecimal hash and converts them to 4 Unsigned Integers and applies the Limbo game algorithm as found on [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

*Dice* - **Pending**

*Wheel* - **Pending**

*Roulette* - **Pending**

*Diamonds* - **Pending**

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
