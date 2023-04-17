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


## Diving in Game Mechanics

It's interesting to see how the game results are supposedly determined for this game, but by the looks of it, there is a preset table of symbols which presumably represents the reels as if they were to act as a data map and somehow, the numbers from integers determines the selection made. It's not quite clear yet, but for example purposes:

### Randomly selected Seed Combination 
To Compare Round Variations in Results to make sense of how the Bytes to NUmber are applies

 - Client Seed: lEBKrRN5d8
 - Server Seed:f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5
 - Nonce: 4

_(EDIT: Later added Round 0 Final Result for reference and realizing our mistake for thinking Round 0 isn't used)_

### Round 0 

**Final Result**
25 11 1 17 15


### Round 1

**Final Result**
22, 18, 27, 9, 28


**Casino Seeds to Bytes**
```
HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:0)
db	00	d6	24	60	cc	56	3b	10	93	0b	b1	92	a7	5c	37	63	e6	60	83	c0	6e	cc	bc	9a	63	e2	1c	ec	47	00	69
219	0	214	36	96	204	86	59	16	147	11	177	146	167	92	55	99	230	96	131	192	110	204	188	154	99	226	28	236	71	0	105

HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:1)
54	66	86	88	b2	2d	e3	91	a4	71	b7	79	08	f5	5a	0e	37	ed	d9	61	0c	df	9c	80	37	09	dc	b7	55	68	04	c9
84	102	134	136	178	45	227	145	164	113	183	121	8	245	90	14	55	237	217	97	12	223	156	128	55	9	220	183	85	104	4	201
```

**Bytes to Number** 
```
(219, 0, 214, 36) -> [0, ..., 29] = 25
0	.855468750000	(219 / (256 ^ 1 ))
+	0	.000000000000	(000 / (256 ^ 2 ))
+	0	.000012755394	(214 / (256 ^ 3 ))
+	0	.000000008382	(036 / (256 ^ 4 ))
=	0	.855481513776	(* 30)
=	25	.664445413277
(96, 204, 86, 59) -> [0, ..., 29] = 11
0	.375000000000	(096 / (256 ^ 1 ))
+	0	.003112792969	(204 / (256 ^ 2 ))
+	0	.000005125999	(086 / (256 ^ 3 ))
+	0	.000000013737	(059 / (256 ^ 4 ))
=	0	.378117932705	(* 30)
=	11	.343537981156
(16, 147, 11, 177) -> [0, ..., 29] = 1
0	.062500000000	(016 / (256 ^ 1 ))
+	0	.002243041992	(147 / (256 ^ 2 ))
+	0	.000000655651	(011 / (256 ^ 3 ))
+	0	.000000041211	(177 / (256 ^ 4 ))
=	0	.064743738854	(* 30)
=	1	.942312165629
(146, 167, 92, 55) -> [0, ..., 29] = 17
0	.570312500000	(146 / (256 ^ 1 ))
+	0	.002548217773	(167 / (256 ^ 2 ))
+	0	.000005483627	(092 / (256 ^ 3 ))
+	0	.000000012806	(055 / (256 ^ 4 ))
=	0	.572866214206	(* 30)
=	17	.185986426193
(99, 230, 96, 131) -> [0, ..., 40] = 15
0	.386718750000	(099 / (256 ^ 1 ))
+	0	.003509521484	(230 / (256 ^ 2 ))
+	0	.000005722046	(096 / (256 ^ 3 ))
+	0	.000000030501	(131 / (256 ^ 4 ))
=	0	.390234024031	(* 41)
=	15	.999594985275
(192, 110, 204, 188) -> [0, ..., 29] = 22
0	.750000000000	(192 / (256 ^ 1 ))
+	0	.001678466797	(110 / (256 ^ 2 ))
+	0	.000012159348	(204 / (256 ^ 3 ))
+	0	.000000043772	(188 / (256 ^ 4 ))
=	0	.751690669917	(* 30)
=	22	.550720097497
(154, 99, 226, 28) -> [0, ..., 29] = 18
0	.601562500000	(154 / (256 ^ 1 ))
+	0	.001510620117	(099 / (256 ^ 2 ))
+	0	.000013470650	(226 / (256 ^ 3 ))
+	0	.000000006519	(028 / (256 ^ 4 ))
=	0	.603086597286	(* 30)
=	18	.092597918585
(236, 71, 0, 105) -> [0, ..., 29] = 27
0	.921875000000	(236 / (256 ^ 1 ))
+	0	.001083374023	(071 / (256 ^ 2 ))
+	0	.000000000000	(000 / (256 ^ 3 ))
+	0	.000000024447	(105 / (256 ^ 4 ))
=	0	.922958398471	(* 30)
=	27	.688751954120
(84, 102, 134, 136) -> [0, ..., 29] = 9
0	.328125000000	(084 / (256 ^ 1 ))
+	0	.001556396484	(102 / (256 ^ 2 ))
+	0	.000007987022	(134 / (256 ^ 3 ))
+	0	.000000031665	(136 / (256 ^ 4 ))
=	0	.329689415172	(* 30)
=	9	.890682455152
(178, 45, 227, 145) -> [0, ..., 40] = 28
0	.695312500000	(178 / (256 ^ 1 ))
+	0	.000686645508	(045 / (256 ^ 2 ))
+	0	.000013530254	(227 / (256 ^ 3 ))
+	0	.000000033760	(145 / (256 ^ 4 ))
=	0	.696012709523	(* 41)
=	28	.536521090427
```

### Round 2

**Final Result**
19	1	6	1	8

**Casino Seeds to Bytes**
```
HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:0)
db	00	d6	24	60	cc	56	3b	10	93	0b	b1	92	a7	5c	37	63	e6	60	83	c0	6e	cc	bc	9a	63	e2	1c	ec	47	00	69
219	0	214	36	96	204	86	59	16	147	11	177	146	167	92	55	99	230	96	131	192	110	204	188	154	99	226	28	236	71	0	105

HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:1)
54	66	86	88	b2	2d	e3	91	a4	71	b7	79	08	f5	5a	0e	37	ed	d9	61	0c	df	9c	80	37	09	dc	b7	55	68	04	c9
84	102	134	136	178	45	227	145	164	113	183	121	8	245	90	14	55	237	217	97	12	223	156	128	55	9	220	183	85	104	4	201
```

**Bytes to Number**
```
(219, 0, 214, 36) -> [0, ..., 29] = 25
0	.855468750000	(219 / (256 ^ 1 ))
+	0	.000000000000	(000 / (256 ^ 2 ))
+	0	.000012755394	(214 / (256 ^ 3 ))
+	0	.000000008382	(036 / (256 ^ 4 ))
=	0	.855481513776	(* 30)
=	25	.664445413277
(96, 204, 86, 59) -> [0, ..., 29] = 11
0	.375000000000	(096 / (256 ^ 1 ))
+	0	.003112792969	(204 / (256 ^ 2 ))
+	0	.000005125999	(086 / (256 ^ 3 ))
+	0	.000000013737	(059 / (256 ^ 4 ))
=	0	.378117932705	(* 30)
=	11	.343537981156
(16, 147, 11, 177) -> [0, ..., 29] = 1
0	.062500000000	(016 / (256 ^ 1 ))
+	0	.002243041992	(147 / (256 ^ 2 ))
+	0	.000000655651	(011 / (256 ^ 3 ))
+	0	.000000041211	(177 / (256 ^ 4 ))
=	0	.064743738854	(* 30)
=	1	.942312165629
(146, 167, 92, 55) -> [0, ..., 29] = 17
0	.570312500000	(146 / (256 ^ 1 ))
+	0	.002548217773	(167 / (256 ^ 2 ))
+	0	.000005483627	(092 / (256 ^ 3 ))
+	0	.000000012806	(055 / (256 ^ 4 ))
=	0	.572866214206	(* 30)
=	17	.185986426193
(99, 230, 96, 131) -> [0, ..., 40] = 15
0	.386718750000	(099 / (256 ^ 1 ))
+	0	.003509521484	(230 / (256 ^ 2 ))
+	0	.000005722046	(096 / (256 ^ 3 ))
+	0	.000000030501	(131 / (256 ^ 4 ))
=	0	.390234024031	(* 41)
=	15	.999594985275
(192, 110, 204, 188) -> [0, ..., 29] = 22
0	.750000000000	(192 / (256 ^ 1 ))
+	0	.001678466797	(110 / (256 ^ 2 ))
+	0	.000012159348	(204 / (256 ^ 3 ))
+	0	.000000043772	(188 / (256 ^ 4 ))
=	0	.751690669917	(* 30)
=	22	.550720097497
(154, 99, 226, 28) -> [0, ..., 29] = 18
0	.601562500000	(154 / (256 ^ 1 ))
+	0	.001510620117	(099 / (256 ^ 2 ))
+	0	.000013470650	(226 / (256 ^ 3 ))
+	0	.000000006519	(028 / (256 ^ 4 ))
=	0	.603086597286	(* 30)
=	18	.092597918585
(236, 71, 0, 105) -> [0, ..., 29] = 27
0	.921875000000	(236 / (256 ^ 1 ))
+	0	.001083374023	(071 / (256 ^ 2 ))
+	0	.000000000000	(000 / (256 ^ 3 ))
+	0	.000000024447	(105 / (256 ^ 4 ))
=	0	.922958398471	(* 30)
=	27	.688751954120
(84, 102, 134, 136) -> [0, ..., 29] = 9
0	.328125000000	(084 / (256 ^ 1 ))
+	0	.001556396484	(102 / (256 ^ 2 ))
+	0	.000007987022	(134 / (256 ^ 3 ))
+	0	.000000031665	(136 / (256 ^ 4 ))
=	0	.329689415172	(* 30)
=	9	.890682455152
(178, 45, 227, 145) -> [0, ..., 40] = 28
0	.695312500000	(178 / (256 ^ 1 ))
+	0	.000686645508	(045 / (256 ^ 2 ))
+	0	.000013530254	(227 / (256 ^ 3 ))
+	0	.000000033760	(145 / (256 ^ 4 ))
=	0	.696012709523	(* 41)
=	28	.536521090427
(164, 113, 183, 121) -> [0, ..., 29] = 19
0	.640625000000	(164 / (256 ^ 1 ))
+	0	.001724243164	(113 / (256 ^ 2 ))
+	0	.000010907650	(183 / (256 ^ 3 ))
+	0	.000000028173	(121 / (256 ^ 4 ))
=	0	.642360178987	(* 30)
=	19	.270805369597
(8, 245, 90, 14) -> [0, ..., 29] = 1
0	.031250000000	(008 / (256 ^ 1 ))
+	0	.003738403320	(245 / (256 ^ 2 ))
+	0	.000005364418	(090 / (256 ^ 3 ))
+	0	.000000003260	(014 / (256 ^ 4 ))
=	0	.034993770998	(* 30)
=	1	.049813129939
(55, 237, 217, 97) -> [0, ..., 29] = 6
0	.214843750000	(055 / (256 ^ 1 ))
+	0	.003616333008	(237 / (256 ^ 2 ))
+	0	.000012934208	(217 / (256 ^ 3 ))
+	0	.000000022585	(097 / (256 ^ 4 ))
=	0	.218473039800	(* 30)
=	6	.554191194009
(12, 223, 156, 128) -> [0, ..., 29] = 1
0	.046875000000	(012 / (256 ^ 1 ))
+	0	.003402709961	(223 / (256 ^ 2 ))
+	0	.000009298325	(156 / (256 ^ 3 ))
+	0	.000000029802	(128 / (256 ^ 4 ))
=	0	.050287038088	(* 30)
=	1	.508611142635
(55, 9, 220, 183) -> [0, ..., 40] = 8
0	.214843750000	(055 / (256 ^ 1 ))
+	0	.000137329102	(009 / (256 ^ 2 ))
+	0	.000013113022	(220 / (256 ^ 3 ))
+	0	.000000042608	(183 / (256 ^ 4 ))
=	0	.214994234731	(* 41)
=	8	.814763623988

```

### Round 3

**Final Result**
10	0	19	14	25


**Casino Seeds to Bytes**
```
HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:0)
db	00	d6	24	60	cc	56	3b	10	93	0b	b1	92	a7	5c	37	63	e6	60	83	c0	6e	cc	bc	9a	63	e2	1c	ec	47	00	69
219	0	214	36	96	204	86	59	16	147	11	177	146	167	92	55	99	230	96	131	192	110	204	188	154	99	226	28	236	71	0	105
HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:1)
54	66	86	88	b2	2d	e3	91	a4	71	b7	79	08	f5	5a	0e	37	ed	d9	61	0c	df	9c	80	37	09	dc	b7	55	68	04	c9
84	102	134	136	178	45	227	145	164	113	183	121	8	245	90	14	55	237	217	97	12	223	156	128	55	9	220	183	85	104	4	201
HMAC_SHA256(f657155f0cef7e879beddf39ac02e1dcd7d4d90d15aff2a428b573d075cecee5,lEBKrRN5d8:4:2)
05	95	6c	ad	a9	29	55	ed	78	2d	f5	a2	9d	0d	d8	9e	59	dd	31	97	b4	c2	ca	5d	33	8a	ee	93	4e	10	52	d0
5	149	108	173	169	41	85	237	120	45	245	162	157	13	216	158	89	221	49	151	180	194	202	93	51	138	238	147	78	16	82	208
```

**Bytes to Number**
```
(219, 0, 214, 36) -> [0, ..., 29] = 25
0	.855468750000	(219 / (256 ^ 1 ))
+	0	.000000000000	(000 / (256 ^ 2 ))
+	0	.000012755394	(214 / (256 ^ 3 ))
+	0	.000000008382	(036 / (256 ^ 4 ))
=	0	.855481513776	(* 30)
=	25	.664445413277
(96, 204, 86, 59) -> [0, ..., 29] = 11
0	.375000000000	(096 / (256 ^ 1 ))
+	0	.003112792969	(204 / (256 ^ 2 ))
+	0	.000005125999	(086 / (256 ^ 3 ))
+	0	.000000013737	(059 / (256 ^ 4 ))
=	0	.378117932705	(* 30)
=	11	.343537981156
(16, 147, 11, 177) -> [0, ..., 29] = 1
0	.062500000000	(016 / (256 ^ 1 ))
+	0	.002243041992	(147 / (256 ^ 2 ))
+	0	.000000655651	(011 / (256 ^ 3 ))
+	0	.000000041211	(177 / (256 ^ 4 ))
=	0	.064743738854	(* 30)
=	1	.942312165629
(146, 167, 92, 55) -> [0, ..., 29] = 17
0	.570312500000	(146 / (256 ^ 1 ))
+	0	.002548217773	(167 / (256 ^ 2 ))
+	0	.000005483627	(092 / (256 ^ 3 ))
+	0	.000000012806	(055 / (256 ^ 4 ))
=	0	.572866214206	(* 30)
=	17	.185986426193
(99, 230, 96, 131) -> [0, ..., 40] = 15
0	.386718750000	(099 / (256 ^ 1 ))
+	0	.003509521484	(230 / (256 ^ 2 ))
+	0	.000005722046	(096 / (256 ^ 3 ))
+	0	.000000030501	(131 / (256 ^ 4 ))
=	0	.390234024031	(* 41)
=	15	.999594985275
(192, 110, 204, 188) -> [0, ..., 29] = 22
0	.750000000000	(192 / (256 ^ 1 ))
+	0	.001678466797	(110 / (256 ^ 2 ))
+	0	.000012159348	(204 / (256 ^ 3 ))
+	0	.000000043772	(188 / (256 ^ 4 ))
=	0	.751690669917	(* 30)
=	22	.550720097497
(154, 99, 226, 28) -> [0, ..., 29] = 18
0	.601562500000	(154 / (256 ^ 1 ))
+	0	.001510620117	(099 / (256 ^ 2 ))
+	0	.000013470650	(226 / (256 ^ 3 ))
+	0	.000000006519	(028 / (256 ^ 4 ))
=	0	.603086597286	(* 30)
=	18	.092597918585
(236, 71, 0, 105) -> [0, ..., 29] = 27
0	.921875000000	(236 / (256 ^ 1 ))
+	0	.001083374023	(071 / (256 ^ 2 ))
+	0	.000000000000	(000 / (256 ^ 3 ))
+	0	.000000024447	(105 / (256 ^ 4 ))
=	0	.922958398471	(* 30)
=	27	.688751954120
(84, 102, 134, 136) -> [0, ..., 29] = 9
0	.328125000000	(084 / (256 ^ 1 ))
+	0	.001556396484	(102 / (256 ^ 2 ))
+	0	.000007987022	(134 / (256 ^ 3 ))
+	0	.000000031665	(136 / (256 ^ 4 ))
=	0	.329689415172	(* 30)
=	9	.890682455152
(178, 45, 227, 145) -> [0, ..., 40] = 28
0	.695312500000	(178 / (256 ^ 1 ))
+	0	.000686645508	(045 / (256 ^ 2 ))
+	0	.000013530254	(227 / (256 ^ 3 ))
+	0	.000000033760	(145 / (256 ^ 4 ))
=	0	.696012709523	(* 41)
=	28	.536521090427
(164, 113, 183, 121) -> [0, ..., 29] = 19
0	.640625000000	(164 / (256 ^ 1 ))
+	0	.001724243164	(113 / (256 ^ 2 ))
+	0	.000010907650	(183 / (256 ^ 3 ))
+	0	.000000028173	(121 / (256 ^ 4 ))
=	0	.642360178987	(* 30)
=	19	.270805369597
(8, 245, 90, 14) -> [0, ..., 29] = 1
0	.031250000000	(008 / (256 ^ 1 ))
+	0	.003738403320	(245 / (256 ^ 2 ))
+	0	.000005364418	(090 / (256 ^ 3 ))
+	0	.000000003260	(014 / (256 ^ 4 ))
=	0	.034993770998	(* 30)
=	1	.049813129939
(55, 237, 217, 97) -> [0, ..., 29] = 6
0	.214843750000	(055 / (256 ^ 1 ))
+	0	.003616333008	(237 / (256 ^ 2 ))
+	0	.000012934208	(217 / (256 ^ 3 ))
+	0	.000000022585	(097 / (256 ^ 4 ))
=	0	.218473039800	(* 30)
=	6	.554191194009
(12, 223, 156, 128) -> [0, ..., 29] = 1
0	.046875000000	(012 / (256 ^ 1 ))
+	0	.003402709961	(223 / (256 ^ 2 ))
+	0	.000009298325	(156 / (256 ^ 3 ))
+	0	.000000029802	(128 / (256 ^ 4 ))
=	0	.050287038088	(* 30)
=	1	.508611142635
(55, 9, 220, 183) -> [0, ..., 40] = 8
0	.214843750000	(055 / (256 ^ 1 ))
+	0	.000137329102	(009 / (256 ^ 2 ))
+	0	.000013113022	(220 / (256 ^ 3 ))
+	0	.000000042608	(183 / (256 ^ 4 ))
=	0	.214994234731	(* 41)
=	8	.814763623988
(85, 104, 4, 201) -> [0, ..., 29] = 10
0	.332031250000	(085 / (256 ^ 1 ))
+	0	.001586914063	(104 / (256 ^ 2 ))
+	0	.000000238419	(004 / (256 ^ 3 ))
+	0	.000000046799	(201 / (256 ^ 4 ))
=	0	.333618449280	(* 30)
=	10	.008553478401
(5, 149, 108, 173) -> [0, ..., 29] = 0
0	.019531250000	(005 / (256 ^ 1 ))
+	0	.002273559570	(149 / (256 ^ 2 ))
+	0	.000006437302	(108 / (256 ^ 3 ))
+	0	.000000040280	(173 / (256 ^ 4 ))
=	0	.021811287152	(* 30)
=	0	.654338614549
(169, 41, 85, 237) -> [0, ..., 29] = 19
0	.660156250000	(169 / (256 ^ 1 ))
+	0	.000625610352	(041 / (256 ^ 2 ))
+	0	.000005066395	(085 / (256 ^ 3 ))
+	0	.000000055181	(237 / (256 ^ 4 ))
=	0	.660786981927	(* 30)
=	19	.823609457817
(120, 45, 245, 162) -> [0, ..., 29] = 14
0	.468750000000	(120 / (256 ^ 1 ))
+	0	.000686645508	(045 / (256 ^ 2 ))
+	0	.000014603138	(245 / (256 ^ 3 ))
+	0	.000000037719	(162 / (256 ^ 4 ))
=	0	.469451286364	(* 30)
=	14	.083538590930
(157, 13, 216, 158) -> [0, ..., 40] = 25
0	.613281250000	(157 / (256 ^ 1 ))
+	0	.000198364258	(013 / (256 ^ 2 ))
+	0	.000012874603	(216 / (256 ^ 3 ))
+	0	.000000036787	(158 / (256 ^ 4 ))
=	0	.613492525648	(* 41)
=	25	.153193551581
```

## Notes of Game Results Review

 - The first 4 Reels have a total of 30 lines with 28 possible segements to be chosen from (since line 0 and line 29, if selected, wouldn't have a symbol either above or below respectively, to fill the column completely, though I could be wrong in case it just loops around for the third symbol in that column).
 - The final and 5th reel has 41 possible lines/rows of symbols to select from with 39 options (again assuming line 0 and line 40 can't be selected.
 - The number for the final results shows which line number and segement accounts for that particular column
 - Each Game round requires 5 results to be determined, each hashed subnonce (starting with 0 as indicated by the ending `...5d8:4:0` of the first Seeds to Bytes entry) provides 8 numbers worth of results (each has has 32 total bytes, 4 bytes to a number). Noted by Round 3 using Final Results from the last 4 bytes (1 number) of subnonce 1 hash (referring to `...N5d8:4:1`) and only shows the first 16 bytes (4 numbers) for the hash generated by subnonce 2 `...5d8:4:2` (whereas Round 0 contains only results from subnonce 0, and Round 1, has results originating from part of Subnonce 0 and subnonce 1, then Round 2 uses results from only subnonce 1) in its calculations.
 - Achievine a final results of 5 Scatters across the middle row would consist of 12, 19, 29(?), 18, 14; or all across the bottom row of scatters would require final results of 11, 18, 28, 17, 13; then assuming symbols wrap around, then scatters across the top row would have final results of 13, 20, 0/30, 19, 15 
 - - For 29, `(?) = assuming it's possible to place the scatter at center by choosing line 29 and suggests symbol wrap-around for the columns bottom symbol`
 - - For 0/30 we're not sure how wrap around works or if it applies, but presumably a result of 0 would revert to the bottom of that table to call the wild symbol for it's top row symbol which is the scatter on 29 in column 3, but that sugguests that columns 1 thru 4 cannot have a bytes to number result higher than 29 which I suppose is justified by the `Bytes to Number` formula including an ending multiplier of 30 of the 4 bytes total.
 - The last note above lead to a propounded idea but remainds undetermined if it will be of any use, but will be explained in [a new file to be created now and replace this text]


