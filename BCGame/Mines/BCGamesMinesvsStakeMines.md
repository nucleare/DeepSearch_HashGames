# The Differences in Calculating Game Results (and what's more commonly used?)
While I've always felt BC.Games Mines played differently from Stake.com/Stake.us, any attempt to describe how the games are different is very difficult to put into words since I would technically be trying to describe how two games, both based on "randomly" generated results, could possibly produce a discernable trend in their game outputs?

Part of me would try to say or explain that it's just the way the placement of the mines take place. There are patterns I can expect to see in Stake games that I would never or rarely ever try to guess compared to a BC.Game version of mines. I've also noticed my plays style and gem selection _feels_ like it's different, though I haven't reflected on it to be sure, because it's quite possible that it might actually be the same and it's just my human pyschology which makes me think I'm playing differently simply because of the difference in graphics.

In either case, we examine the differences in their calculations between the two sites.

# Inspiration

We'll be generatiing results for the following:
 - Server Seed: 3ab06c36571e74e3abdcffa3003182816a7e2846cfdeb85b596b1116302066ba
 - Client Seed: 00ff0000ff000000ff
 - Nonce: 1921
 - Mines: 10

***

## BC.Game Results

Sha256(server_seed)
bf9252917ca92a99d6e397ba0b35e7b215daef3ffc8df51a9d4a62c4c18a036f

Hmac_sha256(client_seed:nonce, server_seed)
90d58f0115ca36a1e27a31a4136ec8afa9e1df5e7798b7e2bf62fdb2c2de5d01

Final Result

Mines On: 24 16 25 20 10 3 4 11 21 6
Remaining order of array: 6 22 7 18 19 13 1 5 23 17 15 2 8 12 14 9

***

## Stake.com Results

Final Result

Values: 8, 15, 10, 6, 17, 22, 14, 2, 3, 12

```
x = (value mod 5) + 1
y = 5 - floor(value / 5)
(x, y) starts from bottom left
```
Mines coordinates:(4,4), (1,2), (1,3), (2,4), (3,2), (3,1), (5,3), (3,5), (4,5), (3,3)


Social Casino Seeds to Bytes
```
HMAC_SHA256(3ab06c36571e74e3abdcffa3003182816a7e2846cfdeb85b596b1116302066ba,00ff0000ff000000ff:1921:0)
5a	d5	e9	b8	9a	c6	2f	e8	67	21	01	e3	50	db	7f	62	a2	8f	4e	0f	e0	93	f2	c7	9c	1e	d0	e2	25	3b	cd	4d
90	213	233	184	154	198	47	232	103	33	1	227	80	219	127	98	162	143	78	15	224	147	242	199	156	30	208	226	37	59	205	77

HMAC_SHA256(3ab06c36571e74e3abdcffa3003182816a7e2846cfdeb85b596b1116302066ba,00ff0000ff000000ff:1921:1)
29	2e	f1	ef	75	d0	fd	e6	3a	72	a6	9e	80	52	40	06	1e	9d	47	96	c2	d1	68	1c	d9	37	99	e1	4c	84	a9	9b
41	46	241	239	117	208	253	230	58	114	166	158	128	82	64	6	30	157	71	150	194	209	104	28	217	55	153	225	76	132	169	155

HMAC_SHA256(3ab06c36571e74e3abdcffa3003182816a7e2846cfdeb85b596b1116302066ba,00ff0000ff000000ff:1921:2)
f0	f8	e5	34	1c	39	ee	cd	5d	76	4f	5d	46	77	c3	20	9d	4f	dc	75	b6	56	20	2b	a8	65	74	58	0f	8e	18	9a
240	248	229	52	28	57	238	205	93	118	79	93	70	119	195	32	157	79	220	117	182	86	32	43	168	101	116	88	15	142	24	154
```

Bytes to Number

```
(90, 213, 233, 184) -> [0, ..., 24] = 8
0	.351562500000	(090 / (256 ^ 1 ))
+	0	.003250122070	(213 / (256 ^ 2 ))
+	0	.000013887882	(233 / (256 ^ 3 ))
+	0	.000000042841	(184 / (256 ^ 4 ))
=	0	.354826552793	(* 25)
=	8	.870663819835
(154, 198, 47, 232) -> [0, ..., 23] = 14
0	.601562500000	(154 / (256 ^ 1 ))
+	0	.003021240234	(198 / (256 ^ 2 ))
+	0	.000002801418	(047 / (256 ^ 3 ))
+	0	.000000054017	(232 / (256 ^ 4 ))
=	0	.604586595669	(* 24)
=	14	.510078296065
(103, 33, 1, 227) -> [0, ..., 22] = 9
0	.402343750000	(103 / (256 ^ 1 ))
+	0	.000503540039	(033 / (256 ^ 2 ))
+	0	.000000059605	(001 / (256 ^ 3 ))
+	0	.000000052853	(227 / (256 ^ 4 ))
=	0	.402847402496	(* 23)
=	9	.265490257414
(80, 219, 127, 98) -> [0, ..., 21] = 6
0	.312500000000	(080 / (256 ^ 1 ))
+	0	.003341674805	(219 / (256 ^ 2 ))
+	0	.000007569790	(127 / (256 ^ 3 ))
+	0	.000000022817	(098 / (256 ^ 4 ))
=	0	.315849267412	(* 22)
=	6	.948683883063
(162, 143, 78, 15) -> [0, ..., 20] = 13
0	.632812500000	(162 / (256 ^ 1 ))
+	0	.002182006836	(143 / (256 ^ 2 ))
+	0	.000004649162	(078 / (256 ^ 3 ))
+	0	.000000003492	(015 / (256 ^ 4 ))
=	0	.634999159491	(* 21)
=	13	.334982349304
(224, 147, 242, 199) -> [0, ..., 19] = 17
0	.875000000000	(224 / (256 ^ 1 ))
+	0	.002243041992	(147 / (256 ^ 2 ))
+	0	.000014424324	(242 / (256 ^ 3 ))
+	0	.000000046333	(199 / (256 ^ 4 ))
=	0	.877257512650	(* 20)
=	17	.545150252990
(156, 30, 208, 226) -> [0, ..., 18] = 11
0	.609375000000	(156 / (256 ^ 1 ))
+	0	.000457763672	(030 / (256 ^ 2 ))
+	0	.000012397766	(208 / (256 ^ 3 ))
+	0	.000000052620	(226 / (256 ^ 4 ))
=	0	.609845214058	(* 19)
=	11	.587059067097
(37, 59, 205, 77) -> [0, ..., 17] = 2
0	.144531250000	(037 / (256 ^ 1 ))
+	0	.000900268555	(059 / (256 ^ 2 ))
+	0	.000012218952	(205 / (256 ^ 3 ))
+	0	.000000017928	(077 / (256 ^ 4 ))
=	0	.145443755435	(* 18)
=	2	.617987597827
(41, 46, 241, 239) -> [0, ..., 16] = 2
0	.160156250000	(041 / (256 ^ 1 ))
+	0	.000701904297	(046 / (256 ^ 2 ))
+	0	.000014364719	(241 / (256 ^ 3 ))
+	0	.000000055647	(239 / (256 ^ 4 ))
=	0	.160872574663	(* 17)
=	2	.734833769267
(117, 208, 253, 230) -> [0, ..., 15] = 7
0	.457031250000	(117 / (256 ^ 1 ))
+	0	.003173828125	(208 / (256 ^ 2 ))
+	0	.000015079975	(253 / (256 ^ 3 ))
+	0	.000000053551	(230 / (256 ^ 4 ))
=	0	.460220211651	(* 16)
=	7	.363523386419
(58, 114, 166, 158) -> [0, ..., 14] = 3
0	.226562500000	(058 / (256 ^ 1 ))
+	0	.001739501953	(114 / (256 ^ 2 ))
+	0	.000009894371	(166 / (256 ^ 3 ))
+	0	.000000036787	(158 / (256 ^ 4 ))
=	0	.228311933111	(* 15)
=	3	.424678996671
(128, 82, 64, 6) -> [0, ..., 13] = 7
0	.500000000000	(128 / (256 ^ 1 ))
+	0	.001251220703	(082 / (256 ^ 2 ))
+	0	.000003814697	(064 / (256 ^ 3 ))
+	0	.000000001397	(006 / (256 ^ 4 ))
=	0	.501255036797	(* 14)
=	7	.017570515163
(30, 157, 71, 150) -> [0, ..., 12] = 1
0	.117187500000	(030 / (256 ^ 1 ))
+	0	.002395629883	(157 / (256 ^ 2 ))
+	0	.000004231930	(071 / (256 ^ 3 ))
+	0	.000000034925	(150 / (256 ^ 4 ))
=	0	.119587396737	(* 13)
=	1	.554636157583
(194, 209, 104, 28) -> [0, ..., 11] = 9
0	.757812500000	(194 / (256 ^ 1 ))
+	0	.003189086914	(209 / (256 ^ 2 ))
+	0	.000006198883	(104 / (256 ^ 3 ))
+	0	.000000006519	(028 / (256 ^ 4 ))
=	0	.761007792316	(* 12)
=	9	.132093507797
(217, 55, 153, 225) -> [0, ..., 10] = 9
0	.847656250000	(217 / (256 ^ 1 ))
+	0	.000839233398	(055 / (256 ^ 2 ))
+	0	.000009119511	(153 / (256 ^ 3 ))
+	0	.000000052387	(225 / (256 ^ 4 ))
=	0	.848504655296	(* 11)
=	9	.333551208256
(76, 132, 169, 155) -> [0, ..., 9] = 2
0	.296875000000	(076 / (256 ^ 1 ))
+	0	.002014160156	(132 / (256 ^ 2 ))
+	0	.000010073185	(169 / (256 ^ 3 ))
+	0	.000000036089	(155 / (256 ^ 4 ))
=	0	.298899269430	(* 10)
=	2	.988992694300
(240, 248, 229, 52) -> [0, ..., 8] = 8
0	.937500000000	(240 / (256 ^ 1 ))
+	0	.003784179688	(248 / (256 ^ 2 ))
+	0	.000013649464	(229 / (256 ^ 3 ))
+	0	.000000012107	(052 / (256 ^ 4 ))
=	0	.941297841258	(* 9)
=	8	.471680571325
(28, 57, 238, 205) -> [0, ..., 7] = 0
0	.109375000000	(028 / (256 ^ 1 ))
+	0	.000869750977	(057 / (256 ^ 2 ))
+	0	.000014185905	(238 / (256 ^ 3 ))
+	0	.000000047730	(205 / (256 ^ 4 ))
=	0	.110258984612	(* 8)
=	0	.882071876898
(93, 118, 79, 93) -> [0, ..., 6] = 2
0	.363281250000	(093 / (256 ^ 1 ))
+	0	.001800537109	(118 / (256 ^ 2 ))
+	0	.000004708767	(079 / (256 ^ 3 ))
+	0	.000000021653	(093 / (256 ^ 4 ))
=	0	.365086517530	(* 7)
=	2	.555605622707
(70, 119, 195, 32) -> [0, ..., 5] = 1
0	.273437500000	(070 / (256 ^ 1 ))
+	0	.001815795898	(119 / (256 ^ 2 ))
+	0	.000011622906	(195 / (256 ^ 3 ))
+	0	.000000007451	(032 / (256 ^ 4 ))
=	0	.275264926255	(* 6)
=	1	.651589557528
(157, 79, 220, 117) -> [0, ..., 4] = 3
0	.613281250000	(157 / (256 ^ 1 ))
+	0	.001205444336	(079 / (256 ^ 2 ))
+	0	.000013113022	(220 / (256 ^ 3 ))
+	0	.000000027241	(117 / (256 ^ 4 ))
=	0	.614499834599	(* 5)
=	3	.072499172995
(182, 86, 32, 43) -> [0, ..., 3] = 2
0	.710937500000	(182 / (256 ^ 1 ))
+	0	.001312255859	(086 / (256 ^ 2 ))
+	0	.000001907349	(032 / (256 ^ 3 ))
+	0	.000000010012	(043 / (256 ^ 4 ))
=	0	.712251673220	(* 4)
=	2	.849006692879
(168, 101, 116, 88) -> [0, ..., 2] = 1
0	.656250000000	(168 / (256 ^ 1 ))
+	0	.001541137695	(101 / (256 ^ 2 ))
+	0	.000006914139	(116 / (256 ^ 3 ))
+	0	.000000020489	(088 / (256 ^ 4 ))
=	0	.657798072323	(* 3)
=	1	.973394216970
(15, 142, 24, 154) -> [0, ..., 1] = 0
0	.058593750000	(015 / (256 ^ 1 ))
+	0	.002166748047	(142 / (256 ^ 2 ))
+	0	.000001430511	(024 / (256 ^ 3 ))
+	0	.000000035856	(154 / (256 ^ 4 ))
=	0	.060761964414	(* 2)
=	0	.121523928829
```


Number to Shuffle
```
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24
8	0	1	2	3	4	5	6	7	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24
8	15	0	1	2	3	4	5	6	7	9	10	11	12	13	14	16	17	18	19	20	21	22	23	24
8	15	10	0	1	2	3	4	5	6	7	9	11	12	13	14	16	17	18	19	20	21	22	23	24
8	15	10	6	0	1	2	3	4	5	7	9	11	12	13	14	16	17	18	19	20	21	22	23	24
8	15	10	6	17	0	1	2	3	4	5	7	9	11	12	13	14	16	18	19	20	21	22	23	24
8	15	10	6	17	22	0	1	2	3	4	5	7	9	11	12	13	14	16	18	19	20	21	23	24
8	15	10	6	17	22	14	0	1	2	3	4	5	7	9	11	12	13	16	18	19	20	21	23	24
8	15	10	6	17	22	14	2	0	1	3	4	5	7	9	11	12	13	16	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	0	1	4	5	7	9	11	12	13	16	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	12	0	1	4	5	7	9	11	13	16	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	12	5	0	1	4	7	9	11	13	16	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	12	5	16	0	1	4	7	9	11	13	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	12	5	16	1	0	4	7	9	11	13	18	19	20	21	23	24
8	15	10	6	17	22	14	2	3	12	5	16	1	21	0	4	7	9	11	13	18	19	20	23	24
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	0	4	7	9	11	13	18	19	20	24
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	0	4	9	11	13	18	19	20	24
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	4	9	11	13	18	19	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	4	9	11	13	18	19	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	4	9	13	18	19	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	9	4	13	18	19	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	9	19	4	13	18	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	9	19	18	4	13	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	9	19	18	13	4	20
8	15	10	6	17	22	14	2	3	12	5	16	1	21	23	7	24	0	11	9	19	18	13	4	20
```


***

# Differences
Regardless of how obvious it may be, we'll include inclue everything we see.


###  Simplicity vs. Complicated

BC.Game uses the hashed server/client/nonce to determine and re-arrange a pre-determined array while on the other hand, Stake.com uses their "cursor" implementation which esssentially acts like adding a subnonce to their main hash and then producing 3 different hashes from the same nonce/server/client but with an incremental subnonce to produce those 3 hashes which are then used to create a value entry into a coordinate formulate and determines the placement of each mine. 

Since Stake's process is more extensive, and we want to make sense of it, we will get the results for setting the game settings to give us the coorinates for all 24 mines and because we know going high or lower in the number of mines doesn't change their positions, I shouldn't need the data for other lower level settings. We are 
 - Getting more examples of the coorinate example calculations
 - Considering "converting" the coordinate system to the count placement system so that each position is identified by a single number similar to BC.Games in order to compare the two
 - In comparing the two, we'll also consider plugging in the numbers from BC.Games into the final algorithm Stake uses to see if the coordinates created produce an similar result
 - As well as compare the resulting arrays to find any similarities or resemblances in case of any notable coincidences

## Missing Stake Results
Since all the calculations are provided in the setting of 10 mines, we just needed to reveal the remaining values for final results and mine coorinates. Otherwise all caculations are provided regardless of how many mines are set.

Final Result
Values: 8, 15, 10, 6, 17, 22, 14, 2, 3, 12, 5, 16, 1, 21, 23, 7, 24, 0, 11, 9, 19, 18, 13, 4

x = (value mod 5) + 1
y = 5 - floor(value / 5)
(x, y) starts from bottom left

Mines coordinates:(4,4), (1,2), (1,3), (2,4), (3,2), (3,1), (5,3), (3,5), (4,5), (3,3), (1,4), (2,2), (2,5), (2,1), (4,1), (3,4), (5,1), (1,5), (2,3), (5,4), (5,2), (4,2), (4,3), (5,5)

### Calculating For Stake

So let's try inputting the values into the equations for x and y.

The "final algorithm" is as follows:

```
x = (value mod 5) + 1
y = 5 - floor(value / 5)
```
Noting that: 

For the "floor" reference:
In JavaScript, floor() is a function that is used to return the largest integer value that is less than or equal to a number. 

In other words, the floor() function rounds a number down and returns an integer value. Because the floor() function is a static function of the Math object, it must be invoked through the placeholder object called Math.

For the "mod' reference:

Calculate a mod b which, for positive numbers, is the remainder of a divided by b in a division problem. The modulo operation finds the remainder, so if you were dividing a by b and there was a remainder of n, you would say a mod b = n.


```
Value 8 - (4,4)
x = (8 mod 5) + 1 = 3 + 1 = 4
y = 5 - floor(8 / 5) = 5 - floor(1.6) = 5 - 1 = 4

Value 15 - (1, 2)
x = (15 mod 5) + 1 = 0 + 1 = 1
y = 5 - floor(15 / 5) = 5 - floor(3) = 5 - 3 = 2

Value 10 - (1,3)
10 mod 5 + 1 = 0 + 1
5 - floor(10 / 5) = 5 - 2 = 3

Value 6 - (2,4)
6 mod 5 + 1 = 1 + 1 = 2
5 - floor(6/5) = 5 - 1 = 4

# ...
```

For reference, when using [this](https://codepen.io/nucleare/pen/XWBdoje) checker, the new array from BC.Games provided script is transformed to the following order (whereas the number of mines simply determines how far, from left toright, do u go down the array and fill in a mine):

```
[24,16,25,20,10,3,4,11,21,6,22,7,18,19,13,1,5,23,17,15,2,8,12,14,9]
```

With 10 mines, the array would end at 6 and represent where the mines are places:
```
[24,16,25,20,10,3,4,11,21,6]
```

## Comparisons

Stake results as raw values: 

8, 15, 10, 6, 17, 22, 14, 2, 3, 12, 5, 16, 1, 21, 23, 7, 24, 0, 11, 9, 19, 18, 13, 4


**Stake Results as Mines coordinates**:

(4,4), (1,2), (1,3), (2,4), (3,2), (3,1), (5,3), (3,5), (4,5), (3,3), (1,4), (2,2), (2,5), (2,1), (4,1), (3,4), (5,1), (1,5), (2,3), (5,4), (5,2), (4,2), (4,3), (5,5); 
whereas x is the horizontal plane and y is the veritcal plane, starting from the bottom left.

Hereinafter identified as Result "(A)" and represents Stakes calculated answer/outcome for this nonce. "Pre(A)" represents the raw values before being turned into coordinates.

**BC.Game results for mine locations** using a counting system, starting from top to bottom, from left to right.: 

24, 16, 25, 20, 10, 3, 4, 11, 21, 6, 22, 7, 18, 19, 13, 1, 5, 23, 17, 15, 2, 8, 12 ,14, 9

Hereinafter identified as Result "(B)"

### Conversion for Comparison

_May be insignificant Considerations, if nothing else, helps understanding the difference in perhaps play style or approach when calculating, though it would be hypothetically unlikely_

Although the production of both game results using differnt chckers show the answer would already be vastly different, for the sake of making a comparison, we are going to convert coordinate references to a count references and view the mine placements both as a result of the calculated values and order of appearance.

Thus, for the given first 10 coordinates, the mine placements would be (when using BC.Games' counting reference method) would be located at:
(A) 3, 4, 7, 9, 11, 13, 15, 16, 18, 23 

Since above is already ordered (b/c we just counted it instead of presenting them in the same order as the given result values or given coordinates), which we should, for reference:
(A) 9, 16, 11, 7, 18, 23, 15, 3, 4, 13

Whilst the original calculated values before applying the forumla to come up with the coordinates was
Pre(A) 8, 15, 10, 6, 17, 22, 14, 2, 3, 12

if re-ordered the pre-coordinate values in numerical order:
Pre(A) 2, 3, 6, 8, 10, 12, 14, 15, 17, 22

Compared to BC.Games (when re-arranged in numerical order:
(B) 3, 4, 6, 10, 11, 16, 20, 21, 24, 25
