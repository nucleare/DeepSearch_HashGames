# GameResultsGenerator
Bulk generation of game outcomes by supplying a list of server &amp; client seed combinations.

## Overview - A Work in Progress
This is a work in progress consisting of scripts that are made to generate the outcome of popular casino games using the provable fair system. It allows you to generate thousands of game outcomes given a server seed and client seed in .txt formaat that is can be easily imported into a .csv file. The original intention was to create easily importable data for an AI learning/prediction model and thus outputs attempt to preserve as much of the contributing data as possible (for what was perceived to be useful in using with an AI learning model.) To that end, it is NOT intended to be a provably fair checker, though it is in essence producing the game results based on a given set of server and client seed, but as they function, it merely generates, in bulk, the game results of a given seed pair for the purpose of creating complete, full sets of game data which can be used to:
 - Create a full game history of outcomes in case you change games and wanted to know what would've happened if you stayed at another game
 - Use the data to create projection models, chart game outcome  trends, and otherwise identify and create one's own world of theorhetical science and math as it applies to playing games of chance, risk, and opportunistic fortune
 - Create a more manageable copy of the game result data for training an AI model
 - Simulate hosting your own at-home casino game where you can pre-determine all the results, and provide yourself with an excescise that will prove to be convincing evidence that the casino is in fact NOT changing the placement of the mines when you click on them.
 - And so much more...!
 
 **As of 03/17/24 - Working files include**
 
  - `GameHash-N1000.py` for providing the output hash of a server seed, client seed pair, automatically attributing each iteration with an apporpriate nonce count and outputting the results in a list in another file. which can be used with...
  - `\Stake\Hash2Limbo-Stake.py` takes the output file from GameHash-N1000.py and returns the results for each game (seed pair and nonce) of Limbo as found on Stake.com or Stake.US and; this output will let you review your revealed server seeds and see how many multipleiers in the hundreds you may have or could have come across. (That sound smore useful doesn't it? lol)
  - `lotterypredict.py` will accurately predict the lottery numbers generated from [Los Angeles Time's Lottery Simulator](http://graphics.latimes.com/powerball-simulator/) because it uses your browser's in-built random number generator, which uses a XorShift128+ algorithm. The idea and concept are explained [here](https://blog.securityevaluators.com/hacking-the-javascript-lottery-80cc437e3b7f) and will require you run `Array.from(Array(5), Math.random)` in the browser console to generate 5 randomly generated numbers to input into the script for prediction.
  - `z3try.py` is a script which attempts to use the Z3 solver to determine the next sequence of numbers between 1 and 100 based on an input of 10 numbers by calculating the mean and attempting to determine the standard deviation of the distribution.



## To Use

Simply run using Python (some libraries required, such as `crypto-js`, `crypto`, `hashlib`, and/or `os`

```
python GameHash-N1000.py seedpair-list_file.txt output_filename.txt
```
Or if they're in JavaScript use `npm` or `node-js`

```
node GameHash.js inpute_file.txt output_file.txt
```

***


# Explained

Some sites use different implementations of HMAC-SHA256, but in general, function more or less the same in using the output of their implementation to serve as the base for determine an output of a game.

For each verifiable bet, a client seed, a server seed, a nonce and a cursor are used as the input parameters for the random number generation function. This function utilises the cryptographic hash function HMAC_SHA256 to generate bytes which are then used as the foundation for how a site generates a provably fair random outcomes on their platform.

For Example, below is how you might typically see HMAC_Sha256 used:
```
    const message, nonce, path, privateKey;
    const hashDigest = sha256(nonce + message);
    const hmacDigest = Base64.stringify(hmacSHA256(path + hashDigest, privateKey));
```
or more simply...
```
    require(["crypto-js"], function (CryptoJS) {
    console.log(CryptoJS.HmacSHA256("Message", "Key"));
    });
```

While below is the code used by [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)
```
    const hmac = createHmac('sha256', serverSeed);
    hmac.update(`${clientSeed}:${nonce}:${currentRound}`);
    const buffer = hmac.digest();       // this line was included just for context
```

While below is the code used by [Wolf.bet](https://wolf.bet/?c=talk2them)
```
    const hash = CryptoJS.HmacSHA256(server_seed,`${client_seed}_${nonce}`,).toString();
```
Typically you find HMAC-SHA256 being used for communication, so it's already serving a different purpose in the sense of how casinos are using it and while both use HMAC-SHA256, the way in which they apply it are different, beyond just the modules it relies on from the underlying JavaScript library. This is why the scripts need to be made specific to certain sites at times and may not necessarily provide the same results for every online casino. It is also what proved to be challenging, for me at least, in trying to get the scripts to match whatatever hash the provably fair checker of a site would produce. This is why we start with producing the same hash first, instead of going straight for matching game results.


***

# Variations

## Non-Incrementing Cursor
The cursor is only iterated over when the game being played requires the generation of more than 8 (32 bytes / 4 bytes) possible outcomes. For example: when you need to use more than 8 cards in a game of Blackjack.

The cursor starts as 0 and gets increased by 1 every time the 32 bytes are returned by the HMAC_SHA256 function. These games don't require more than 8 random numbers to be generated for the game events, so the curser does not increment as there is no need to generate any additional possible game outcomes and is therefore set to 0.

*Basic Output Hash Generator* - The base RNG for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass) games that do not require more than 8 random numbers to be generated for the game events. This script simply generates the output hashes used to determine game results before conversion to bytes. 

These hashes can be used in conjunction with a scripts for Dice, Limbo, Wheel, Baccarat, Roulette, and Diamonds for [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

## Game Outcome Scripts

### ~~Stake~~

#### UPDATE REGARDING STAKE RESULTS GENERATION
\[Placeholder\]

 - **[Limbo](https://github.com/nucleare/GameResultsGenerator/tree/main/Stake)** - Uses [this script](https://github.com/nucleare/GameResultsGenerator/blob/main/GameHash-N1000.py) on the output file from the Basic Output Hash Generator. Takes on the process of converting the first 4 byte pairs of the Hexidecimal hash and converts them to 4 Unsigned Integers and applies the Limbo game algorithm as found on [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass)

 
 ### BC.Game
 
 Src: https://github.com/bcgame-project/verify
 - [Coin Flip](https://github.com/nucleare/GameResultsGenerator/tree/main/BCGame/CoinFlip)
 - [Hilo](https://github.com/nucleare/GameResultsGenerator/tree/main/BCGame/Hilo) - Discovery 02/11/2023 - Shares same output hash generation for the underlying game mechanics but when using those figures to represent a card in a deck of cards, vastly ndifferent. Read a tad more on that [here](https://github.com/nucleare/GameResultsGenerator/blob/main/BCGame/Hilo/Observation.md) 
 - [Mines](https://github.com/nucleare/GameResultsGenerator/tree/main/BCGame/Mines)
 
 -Source 
 
 ### Wolf.bet
 
 - **Dice** - _Pending_
 - **Limbo** - _Pending_
 - **Hilo** - _Pending_
 
 
 ***
 
 ## Contributing
 
 ### Research
 Join my research collect channel on [Telegram](https://t.me/+8stIgx7cCCk1ODBh) and submit your server/client seed & nonce combinations for your more interesting game outcomes for tracking and notation. More details below.
 
 Accepting:
 
 - Screenshots of detailed game result - showing all or part of hashed server seed, client seed, and nonce (nd the unhashed seed when applicable)
 - Game results are for provably fair games only that utilize the server seed, client seed, and nonce (and sub-nonce if applicable) to generate the game result. 
_These are typically found as house games or originals_
 - For the first nonce or game outcome of a used seed combination, please post the copy & pasted seed information with the screenshot or as a reply to the screenshot, Subsequent games using the same server seed and client seed do not need to include the pasted seeds. Only when changes to server seed or client seed occur, then please paste the information for ease of reference
 - Does NOT need to be a win. We're not looking for glory and glamour, just data for determining correlations. So if you lose the game but it was still something that would've resulted in a high multi, please submit it. _(Ex. Dice hitting 0.00x or 100.00x; HiLo coming out with 3 Ace cards or 3 King cards in a row where you could've bet higher or missed the correct call and lose or won only a small multiplier; Slide hits over 1000x, Crash hits over 1000x, Mines gem formation resembles a simple or easy to guess outcome such as 3 full rows for 15 gems on 10 mines, Towers is a straight shot up one of the higher settings, etc.)_ The outcome itseslf when considered a rare occassion, submissino of the data would help
 
 
 It can be for any casino site that incorporates a provably fair system and allows you to check your game results (just to filter out any websites that only claim "provably fair" but don't actually offer you a way to check the results (i.e. [DuelBits](https://duelbits.com/?a=github) or [Rollbit](https://rollbit.com/referral/github) whereas the former offers the ability to change seeds, but doesn't seem to offer a way to check or calculate the results and the latter seems to offer a means of calculating game results with the game script being offerred and an explanation of how it works, but when clicking on past games or trying to identify a particular game's used hashed to look it up, the information thus far seems impossible to find.) However, if result checking is offerred by a third party, where the information can be inputted and a resule be given, then it may be included. The idea is that it's provably fair only if there is a means to verify a particular game and be able to identify that game regardless of when it was played.
 
 Screenshots are probably most convenient and it is only requested that for any initial seed posted screenshots, that you followup with any pasted hashshed/unhashed/client seeds or complicated nonces too if it can be easily copy n pasted. After the seed has been pasted as text once, proceeding screenshots of the same seed can be sent without pasting the text version.
 
 ### Monetary Support
 
 Eventually the data will somehow be comprehensive assembled into a book or app of some sort and funding will be generated from there, but until then, this can only remaind a past time hobby and worked on at intermittent times so any monetary contributions would help call for more committment to the studies' progress.
 
 In addition to crypto address sent donations, monetary contributions using a credit card or bank card is availble through the [purchase of research hours found here](https://checkout.square.site/merchant/9EN1DRFRT1369/checkout/XYAXX4HRDPU7F4DPI4FKYJ77). To view the type of research, the progress, and to view the advantages it hopes to offer, an invite to the private repository is required to help safeguard some of the projects currently under way. Requests can be sent by [submitting a an issue here](https://github.com/nucleare/GameResultsGenerator/issues) using the title "Lacking Data" and submitting your either your preferred contact method or a message requesting the link as a temporary message until the topic is marked as hidden. The issue topic will be immediately hidden upon receipt and can be considered as under review once hidden, but note that the issue topic will remain public until viewed and/or received by the repository owner, so keep that in mind (and consider why both options have been offerred).

Or 

BTC [bc1qr2ymf0n0hn8m4ymewk8mccf7j43srhxycvwsjh](bitcoin:BC1QR2YMF0N0HN8M4YMEWK8MCCF7J43SRHXYCVWSJH?label=GitHub%20DOnations)

ETH - 0xeA9Ea1678e94c53F25E49D6eC6b175A86796dCA3
