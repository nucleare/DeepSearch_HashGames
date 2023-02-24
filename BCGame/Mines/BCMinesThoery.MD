# BC Games Mines Game Theory
Explains some of the different approaches one might take in regards to using the game of mines to determine a seed's behavior and therefore apply a method of
1. Recognizing that behavior pattern when it appears under a different, unknown/unrevealed seed
2. Increasing the probability of a successful estimate of a forthcoming result, or
3. Correlating that behavior with the results of another game

## Understanding the Game
_As taken from BC.Games Website..._

**What Is Mines?**

Among several gambling games built on the blockchain, Mines at BC.GAME is unrivaled. Right now is your opportunity to sit on the sidelines and escape being blasted to kingdom come by doing absolutely nothing. This means extra caution should be used when finding such huge multiplies. Ready to embark on a casino game trip? Try Mines now!

**How to Play Mines?**

1. Select the number of mines you wish to place for the round.
2. Press BET button to start the round.
3. Each gem revealed will increase the payout multiplier.
4. Cash out any point to win at the last multiplier displayed.
5. If a mine is revealed, the game is ended and your wager is lost.
6. You may set more mines to increase multipliers on each gem revealed.

**What is the House Edge of Mines?**

1% HouseEdge.

**How Are the Results Calculated?**

To get the results, we calculate the hash value of the combination with `HMAC_SHA256`. This gives us a 64-character hexadecimal string: 

`hash = HMAC_SHA256 (clientSeed:nonce, serverSeed)`.

[The game outcome is then determined by the following JavaScript]

```
const crypto = require("crypto");

function getResult(hash) {
  const allNums = [
    7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4,
    12, 10, 23, 11,
  ];
  let seed = hash;
  let finalNums = createNums(allNums, seed);
  seed = crypto.createHash("SHA256").update(seed).digest("hex");
  finalNums = createNums(finalNums, seed);
  return finalNums.map((m) => m.num.num);
}

function createNums(allNums, hash) {
  let nums = [];
  let h = crypto.createHash("SHA256").update(hash).digest("hex");
  allNums.forEach((c) => {
    nums.push({ num: c, hash: h });
    h = h.substring(1) + h.charAt(0);
  });
  nums.sort(function (o1, o2) {
    if (o1.hash < o2.hash) {
      return -1;
    } else if (o1.hash === o2.hash) {
      return 0;
    } else {
      return 1;
    }
  });
  return nums;
}

function main (serverSeed, clientSeed, nonce) {
  let resultArr = [clientSeed, nonce];
  let hmacSha256Result = crypto.createHmac("sha256", serverSeed).update(resultArr.join(":")).digest("hex")
  let resultList = getResult(hmacSha256Result);
  console.log(resultList);
}

// main("server seed", "client seed", "nonce");
```

# The Analysis

_Take note that the comments below are all theorhetical and in no way claims to be accurate. The information is purely speculatory and for entertainment purposes only. Gambling is a form of entertainment and our attempt to gain an advantage is a form of entertainment considered to be a challenge. Some of the principles discussed may reflect or correlate with real world mathmatics and cryptography-based principles but should any successful application of those principles result in the accurate prediction of a game result are likely merely coincidence and should NOT encourage anyone to utilize the discussed methods as a reliable means of winning any wager made. YOU ARE SOLELY RESPONSIBLE FOR YOUR GAMBLING DECISIONS. It is not considered cheating as we are not manipulating results but it is likely that upon any theorhetical or coincidental success, it may be considered advantage play. Being an advantage player on BC.Games may result in a ban per their user agreement/terms of service. **You have been warned**._

## The Game Algorithm

It is my understanding (as a non-programmer) that the algorithmic function used for Mines determines the placement of the mines. Therefore, it is understood that upon calculation of the hash, the given array is re-ordered using the hash (somehow) and determines the placement of the mines. With your game selection of how many mines are in play per game will determine how many mines are placed based on that array. 
For preliminary studies, we will be using [this](https://bcverify.gdoc.win/) provably fair checker.

**Example**

Given the following:

Server seed - 40beefabc30dfdfb54aa239479dcd5a469e5f9f1879c622063e3704194c31664

Client seed - 00ff0000ff000000ff

Nonce - 176

Mines - 10


The resulting array would be - 12, 13, 14, 16, 17, 19, 22, 23, 24, 25 and the resulting gems are located on 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 18, 20, 21

Whereas the full array is - 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 and the single gem on the board is at location 10
**IT should be noted that it was later discovered because we used the provably fair checker from gdoc, it automatically sorted the numbers used to determine the mines instead of showing them in their original array order.**

## Theory 1 

 - Whereas the starting point of the mine array is `[7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4, 12, 10, 23, 11,]`; and
- Whereas it is considered infeasible to predict the resulting hash of an unknown server seed being combined with a known client seed and nonce; and
- Whereas if you chose to use the same client seed repeatedly, the only variable in determining the resulting hash is the unknown server seed; and
- Whereas using any preferred coding environment, one could re-arrange an array based on an index; and
- Whereas it is concievable that the resulting hash is, in some form, an index for the re-arrangement of the initial array; and
- Whereas it is noted that upon determining that index, it is more than likely unique to that particular hash and since the hash changes with every nonce, we would not be able to apply that index for sorting the array if given the same client seed and nonce; and
- Whereas the number of mines being set limits the possible combinations of outcomes of any given seed combination and nonce; and
- Whereas by confining the number of possible outcomes to exist in any given set of seed combinations no matter how infeasible the number of possible hashes may exist, it will result in more repeated game outcomes to occur; and
- Whereas it is believed that some notable pattern of reoccurance of an index can be attributed to any given set of seed combinations will appear intermittently; now, therefore, be it
- Theorized that a correlations between the frequency of those intermittent reoccurances appearing in one given set of a seed combination can be found in the frequency of intermittent reoccurances that appear in another set of a seed combination; and, be it
- Further theorized a library of datasets consisting of those correlations may assist in projecting the future reoccurance of an outcome based on the recorded reoccurances found within a currently used set of a seed combination where the server seed and resulting hash are unknown.

### Theory 1 Explained

Let's say we take the earlier provided example and change the game settings to set the number of mines to be 1 mine instead of 10. The mine to be placed would be at location 12 because it's the first number of the re-arranged array. If we generate all the outcomes for 10,000 nonces, it's very probable that we would have more than 1 game where the single mine is placed at location 12 again because there are only 25 possible locations that 1 mine could be placed and we have 10,000 games being played.

Statistically speaking, if there's a chance that 1 in 25 games would result in the mine being placed on location 12 then it can be said that 4% of our 10,000 games will consist of a game result with the single mine being placed at location 12.

Now if we record which nonce results in a mine being placed at location 12 _(let's call those nonces as having an "M12" result)_ and we were to plot when they occurred for any given seed combination _(let's call each seed combination a "game set")_ then it's first theorized that: 

Since we assume that occassionally we will see an M12 game appearing on some form of consistent basis _(for example if an M12 game was spaced 10 nonces apart then it's likely we will see some number of nonces later that it will happen again that they are 10 nonces apart)_ and because we know or admit that when those instances occur, (the instance of them being 10 nonces apart) will be intermittent or in otherwords inconsistent, but albeit thaat fact, it's theorized that if we can find some correlation with how often or when those instance occurs in one game set then we can find some correlation to either similar instances or the same instance occuring themselves in another game set or perhaps find a correlation between the correlations of similar instances found in another game set.

If that's possible or true, then if we made a library or dataset of those correlations and we were playing a game set where we dont know the server seed but up until whatever nonce we may be on, we have identified enough instances of, again for example, M12 games being also 10 nonces apart, then it's further theorized that:

We would be able to compare it to our dataset where we might be able to find a match in either the frequency of those appearances or in the correlation of comparable game sets such that we can then use what we know to either predict when that instance will occur again in our current game set or be able to recognize that the instance was occurring.

Note that the correlation may refer to may mean any number of things such as, for example: 
 - every 500 nonces always has 3 instances of 12M games; or 
 - every hashed server seed that starts with "aa1" has an M12 game somewhere between nonce 30 and 39; or 
 - every so often an M12 game is proceeded by a game that has a mine on location 13 ("M13"); or 
 - every game set has one instance that 2 consecutive nonces will result in only 2 numbers of the array being re-arranged (a nearly identical game being repeated except for one mine being placed somewhere else; or
 - whenever an array containing e, f, g, h, i occurs, an array with e, f, g, h, i will occur again within 1-25 nonces (letters are used to represent any possible number so as to point out, in this example, that if a particular order of an array segment occurs, it is likely to occur again whereas the variable try to specify that it has to be that particular set of numbers and not necessarily just the order of the array); or
 - etc.

Which would then mean that if we took, for example, the last correlation example in the list above, and made a guess that after an M13 game we would have an M12 game, (and although normally we would probably be wrong most of the times if using that rule alone, but) if at least one time we were right and we were able to predict when we were right, then that would mean not only that we had won, but that we were able to minimize the number of times we were wrong before getting it right and successfully proved our theory or proved our dataset could help predict that win.

In laymen's terms, or as **TLDR**, if it's all just a coincidence then maybe we can predict when that coincidence might occur again to our benefit by drawing conlcusions about how or when those coincidences occur.
