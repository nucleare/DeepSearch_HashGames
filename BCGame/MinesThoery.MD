# BC Games Mines Game Theory
Explains some of the different approaches one might take in regards to using the game of mines to determine a seed's behavior and therefore apply a method of
1. Recognizing that behavior pattern when it appears under a different, unknown/unrevealed seed
2. Increasing the probability of a successful estimate of a forthcoming result

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
_Take note that the comments below are all theorhetical and in no way claims to be accurate. The information is purely speculatory and for entertainment purposes only. Gambling is entertainment and our attempt to gain an advantage is a form of entertainment considered to be a challenge. Some of the principles discussed may correlate with real world mathmatics and principles but should any successful use of those principles are merely coincidence. It is not considered cheating as we are not manipulating results but it is likely that upon any theorhetical success, it will be considered advantage play. Being an advantage player on BC.Games may result in a ban per their user agreement/terms of service. You have been warned._

## The Game Algorithm
It is my understanding (as a non-programmer) that the algorithmic function used for Mines determines the placement of the mines. Therefore, it is understood that upon calculation of the hash, the given array is re-ordered using the hash (somehow) and determines the placement of the mines. With your game selection of how many mines are in play per game will determine how many mines are placed based on that array. 
For preliminary studies, we will be using [this](https://bcverify.gdoc.win/) provably fair checker.

**Example**
Given the following:
Server seed - 40beefabc30dfdfb54aa239479dcd5a469e5f9f1879c622063e3704194c31664
Client seed - 00ff0000ff000000ff
Nonce - 176
Mines - 10

The resulting array would be - 12, 13, 14, 16, 17, 19, 22, 23, 24, 25

### Theory 1 
