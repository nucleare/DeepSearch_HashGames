**TLDR** - _This directory is simply for gathering notes and ideas that will be incorporated into the project in one way or another and may not necessarily be complete in verbiage or explanation._


*****

### Herein Lies the Analytical Hypothesis and Lucrative Ambitions of a Hopeful But Intelligent (Somewhat) Degen 
The theoeries that drive innovation, the philosophies that inspire vision, and the aspirations that feed our curiosity and drive is madly climbing down a rabbit whole of highly complicated mathmatics, crytpography, computer science, and technology are all in the name of finding that one sure-fire way of capitalizing on massigve gains from various online casinos and setting ourselves up for a life more enjoyable lived. They say money doesn't solve everything, but it sure does help alot.

# The Basic Guiding Principles

### General Idea/Belief
 - That a "cryptographically secure" form of hashing is done to generate a random string of letters and numbers and through various mathematical proccesses, those random string of letters and numbers, either by conversion or other process, are transformed into numbers and from numbers into game results. Each step of this process, in substances, is a deterministic algorithm
 - Conceptually speaking, the more variables you have, the harder it is to find correlations, therefore at best, you can maintain the client seed and know what to expect when it comes to the nounce but the server seed is the missing link in pre-determining results. While a reverse of the hash would be ideal, it is also infeasible at this time, therefore we adapt a different approach. One that has been observed and witnessed or imagined and fantasized, either way, we won't know until we prove it or go broke trying.

### It is Recognized
 - That it would be infeasible to reverse the hash, so that is not our pursuit
 - The the resulting hash is statistically random and that the possibilities of determining a hash are more or less beyond our human capacity
 - We can neither predicts or determine the unhashed server seed
 - We are NOT looking to create software that improperly creates an advantage by attempting to inject malicious code or "hack" the casino servers but rather, intelligbly establish a system of rules or a method of calulcation that can be applied with better than average consistent results, reliability, and produce a steady stream of income.
 - In some cases, it may not be about beating the odds of the game per se, but knowing when things are more favorable or less favorable, when to go all in, and when to to ride out the loss
 - In other cases, it may be all about beating the odds into submission until they cry us victorious! ...or more simply, using them to our advantage

# Overseeing Theories 

## The Intermittent Pattern (Principle) Theory
Summary: A concept based on the idea that game results, at certain times, can become fairly predictable as a result of what are perceived as intertmittent patterns appearing in a series of game plays that could be deduced from historical play. The aspiration is that when you recognize a repeating intermittent pattern, you'll know how that pattern plays out and how to perfect place your bets. 
Example: If a and b represent a particular outcome or decision (let's just say for now that a=higher b=lower in HiLo) the following pattern just occurred in a game, a a b b a b a b, then 5 hands later, it starts out similarly, a b b a b a _ and thereupon recognizing the pattern is similar to the one 5 nonces ago, you guess "b" and assuredly win. (In the wild, it's not nearly this simply and is only an example for conveying the concept)

In progress: Identify a set of "triggers" or "markers" to recognize a particular pattern and later utilize similar or correlated markers to accurately predict a specific pattern's forthcoming appearance and thus predictable outcomes.

## Seed Lifecycle and Behavior (Principle) Theory
Summary: A concept based on the idea that seed combination hash outcomes can exhibit subjective behaviorial changes (an analogy for their perceived "behaviorial output" such as a tendency to hit over 100x 3 or more times in a set of Limbo games particularly between nonce 300-400 while also happening similarly at nonce 1300-1400). Thus it is more advantageous to determine a "behaviorial pattern" of a server seed in order to determine what forecasting rules can be applied. In other words, there's not going to be one strategy that works on every seed, but rather, the hope and aim is that, conceptually speaking, there is one rule that can be applied to every seed that will determine the specific strategy for that seed.

~Example (Simplified for elaborative purposes only):  In continuing the above example, say that upon recognizing the patternistic behavior of hitting over 100x we'll specify them and say there were 3 instances of over 100x which included two times at 100-120x and a third one at 400x, and that would occur again between nonce 300-400, 1300-1400, later on seen to occure once again from nonce 2300-2400. 
Now let's say you change seed, and something similar happens but between nonce 800-900 and again but at 1600-1800, so it was a much wider amount of nonces for the three 100x+ multis to be witnessed and finally 3200-3600 whereas it was then spread over 400 nonces. 
Now, between those two seeds, they both, in theory, would have had these repeating "patterns" of two 100-120x before a 400x or higher appeared and that is the intermittent pattern recognized in the first seed (again, their appearance is made more obvious to a pattern for the purpose of explaining and it's never quite that simple when we witness it in the wild and say "intermittent") The second seed might be said to have a similar "pattern" as well, but because of how it was spread out, the appearance was not as regular as the first seed. Therefore applying the strategy of "since two 100x's have hit thus far, 400x is forthcoming" and if you had to rely on that during the second seed, it would've been unreliable as it took much longer to hit that 400x. Therefore the "behavior" of the first seed is that this pattern repeats consistently almost every thousand nonce, while the "behavior" of the second seed is that it presents this pattern somewhat less consistent in the typical sense in an expansive way, widening the gap the higher~



# Ignore the below text
These are just notes and will be moved to separate files (kept going full explanation rather than sumarrize as a Table of Contents

~In short, for every game result, the same server seed and client seed are used, with only a changing nonce. As a deterministic algorithm, the only variable that changes is the nonce and accounts for creating an entirely different output hash outpput. However, the algorithim is so complex that adding an extra character to a given string would drastically change the output hash and it remains infeasible to dictate an output hash in that way. Instead, the resulting hashes are by nature, part of a series. It's just that the series is so complex, if given a list of hashes, it would be impossible to believe they were part of a mathmatical series governed by a single rule.~

