*We may just be venturing down an unnecessary rabbit hole with this one...*
 
 # Bytes to Number "Rainbow Table"
 
 We were inspired by an idea, to create something similar to what's suspected as being a Rainbow table of sorts. A rainbow table is a precomputed table for caching the outputs of a cryptographic hash function, usually for cracking password hashes. Whereas instead of precomputing the hash function, we're precomputing the 4 possible decimal values of each 256 byte number.
 
 ## To Elaborate
 
 Each game result consists of a Bytes to Number section which looks like the following:
 
 ```
 (219, 0, 214, 36) -> [0, ..., 29] = 25
0	.855468750000	(219 / (256 ^ 1 ))
+	0	.000000000000	(000 / (256 ^ 2 ))
+	0	.000012755394	(214 / (256 ^ 3 ))
+	0	.000000008382	(036 / (256 ^ 4 ))
=	0	.855481513776	(* 30)
=	25	.664445413277
```

Whereas in the second to last line, the multiplier varies by game, in this case `=	0	.855481513776	(* 30)` the sum is multiplied by 30 for the game Tome of Life.

For other games the multipliers that replace "30" in the reference above:
 - Limbo - 16777216 (followed by a raw to edge equation `16777216 / ({Result of multiplying sum by 167777216} + 1) * (1 - 0.01) = {Game result}`)
 - Dice - 10001 (not followed by division but decimal place is moved to account for a 4 digit number)
 - Diamonds - 7
 - HiLo - 52
 - Keno - 40 (followed by Numbers to Shuffle)
 - Mines - 25 (followed by Numbers to Shuffle)
 - Roulette - 37
 - Scarab Spin - 30 (and seems similarly constructed to Tome of Life with first 4 columns having symbols rows 0 - 29 and the final 0 to 40)
 - Blue Samurai - 1 (buut it's calculation scheme is totally bonkers)
 - Video Poker - 52 (followed by Numbers to Shuffle)
 - Wheel - 10, 20, 30, 40, or 50 depending on Segments
 - Plinko - 2 (regardless of risk level or number rows)
 - Tower - 4 on easy, 3 on medium, 2 on hard, 3 on expert, 4 on master (Interestingly, all followed by Number to Shuffle but only Easy and Medium show more than one set of Bytes to Number calculations)
 - Blackjack - 52
 - Baccarat - 52

This is explained under [Conversions](https://stake.com/provably-fair/conversions?c=github) Under the topic of **Floats to Game Events**

> Where the process of generating random outputs is universal for all our games, it's at this point in the game outcome generation where a unique procedure is implemented to determine the translation from floats to game events.
>
> The randomly float generated is multiplied by the possible remaining outcomes of the particular game being played. For example: In a game that uses a 52 card deck, this would simply be done by multiplying the float by 52. The result of this equation is then translated into a corresponding game event. For games where multiple game events are required, this process continues through each corresponding 4 bytes in the result chain that was generated using the described byteGenerator function."

Although, with that explanation, the only one that doesn't appear to make sense is the game Diamonds as results only consists of 5 gems. But more importantly, and back to the subject at hand...

## But, Do We Need It?

In being inspired by this idea of thought, it needed to be fully expanded upon to determine whether or not it stands to be even useful. The initial idea was that perhaps in being able calculate the numbers behind a game result, it could then more or less provide the output hash of a game result. But, does that do us any good seeing as how we wouldn't be able to reverse that hash in the first place?

In which case, perhaps there is either some internal motivation attempting to hint at another possible method of discovering patterns within the game result or for determining the behavior of a seed, otherwise, it may have just been disillusioned hopefulness chasing down an insignificant lead...

Taking a step back, the idea originated in review of the game mechanics for Tome and knowing the full reel layout of symbols. So in that case, perhaps mapping the reel segment each game result choose from would be just as much of a guessing game as any other. Not to mention the fact that attempting to recognize which 3 symbol segment each column might be referring to, would create a high amount of burdern per game turn. Unless it can be further hypothesized how having these numbers would play any role in gaining at advantage, only one thought comes to mind thus far. If one could determine the Bytes before they became numbers, we would be able to determine the results as they would appear in another game. But to that note, knowing what the result would've been in another game, only becomes useful if it can serve as an indicator of a forthcoming event in a current or other game.

On that note, I digress.
