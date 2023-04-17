_This may apply to almost any server/client seed and nonce-based slot game that offers a bonus buy feature but for this entry and from past testing, this "research" and theory originates from Stake's [Tome of Life](https://stake.com/casino/games/tome-of-life/?c=github) as also found on [StakeUS](https://stake.us/casino/games/tome-of-life/?c=Github)_

# Introduction

Among Stake Original's there is a game called Tome of Life, a 5-Reel, 20-lines, Slot machine-like game that allows players free reign when it comes to the bet/play amounts but unlike Scarab Spin or Blue Samurai, Stakes other slot-like originals games, Tome of Life allows players to buy the bonus round/feature at any time for any of those bet sizes that they wish as it adjusts accordingly.

To highlight some of the game rules as will later be useful to bear in mind:
 - In the case of multiple WILD symbols in a winning pay line, only the highest multiplier will be paid. If multipliers are equal, only one prize will be paid.
 - COmbinations where WILD acts as another symbol pay double
 - All wins are multiplied by bet per line, not total bet.
 - Capped at 180 free spins.
 - **All wins during bonus rounds are tripled,** except when five wilds are spun
 - Bonus Buy price is set to 37x the base bet amount.

What makes this game more interesting is that it is based on the same server seed, client seed, and nonce as any of the other Stake originals which means that for each of the bonus rounds, it utilizes a sub-nonce (because each game or spin would only account for one nonce).

The question unanswered is how significant is the impact of the added subnonce on the resulting hash, to what degree does it affect the output hash and ultimately, is there any feasibly discernable relationship of the game rounds part of a subnonce as opposed to a new game with a whole new nonce?

## Initial Observations

Depending on the seed, it was noticed that in general, wins came and went, but often would arrive in pairs, either as a win followed by a loss or two, and then another win (and, by win, I mean winning a multiplier that's above at least 2x). Then is either followed by a handful of losses or small wins. What further caught my attention at the time was that any time I'd see two WILDS in a spin, it would normaly be within the next 2 or 3 spins that I'd see another 2 wilds in the results. So for curiosity sake, I told myself that every time I'd see 2 wilds, I would wait 2 rounds and then buy the bonus which more or less intnded to by the bonus right as 2 wilds were expected to hit. The results were surprising but inconclusive to say the least. Though it has led me to wonder if perhaps in substance, that's how some, if any, the regular slot might work for Bonus Buys, which would make some sense of why they sometimes return great and other times not so much.

Follow up tests were also successful and for the first time, I landed some of my largest multipliers ever witnessed on Tome of Life, however, obviously the timings were off and nothing substantive could be determine insofar as using indicators to determine when to buy. But, thus far it's reasonable to believe, based on the numerous results thus far, that if the first few rounds has 2 wilds or 2 scattter symbols in them, it's more likely that the bonus rounds will at least pay for themselves.

To be continued.
