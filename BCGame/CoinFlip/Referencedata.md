# Coin Flip Reference Data
Since there doesn't seem to be a provably fair verifier page on [BC.Games](https://bc.game/i-5r54hpin-n/) I wanted to try and save some reference data as there is a [provably fair checker from github](https://bcgame-project.github.io/verify/coinflip.html) but no explanation given on the site.

So the following is from the in-game "Verify Results" modal popup for [this](https://bc.game/#/sd/1139Q7RF8FQCR7) game:

Input
```
Server Seed
18fbbc01bbad8823f5a2e2380574119d61d6ae8d5ae1385761ac08a53fe813e8
Client Seed
34b3304ea17b8faed51f1a72af1bfb8f
Nonce
6371
Round
4
```

Final Result
Note that for 

"1 -> coin" Is Tails

![Tails](https://bc.game/assets/tail.6faa0ccf.png) 

and "0 -> coin" is heads

![Heads](https://bc.game/assets/head.a1e82bad.png)


```
round 1:
hmac_sha256(client_seed:nonce:round, server_seed)

e8	04	59	f1	e9	9f	ae	00	a5	7a	19	bf	be	7f	77	77	eb	f3	80	0c	2c	2f	e3	6e	ed	38	db	d6	94	a4	bb	54
232	4	89	241	233	159	174	0	165	122	25	191	190	127	119	119	235	243	128	12	44	47	227	110	237	56	219	214	148	164	187	84
(e8, 04, 59, f1) -> [0, ...4] = 1
1 -> coin

round 2:
hmac_sha256(client_seed:nonce:round, server_seed)

b2	36	98	07	48	d2	18	f2	7d	db	ef	01	37	ee	af	3a	f6	89	c6	da	fa	70	62	1f	7e	01	b5	3b	5c	58	ea	5b
178	54	152	7	72	210	24	242	125	219	239	1	55	238	175	58	246	137	198	218	250	112	98	31	126	1	181	59	92	88	234	91
(b2, 36, 98, 07) -> [0, ...4] = 1
1 -> coin

round 3:
hmac_sha256(client_seed:nonce:round, server_seed)

77	d6	e5	3f	66	f6	19	ea	0c	f5	66	fd	87	71	0f	18	01	95	03	b6	fb	74	ce	fd	88	e7	90	89	07	ec	f0	cc
119	214	229	63	102	246	25	234	12	245	102	253	135	113	15	24	1	149	3	182	251	116	206	253	136	231	144	137	7	236	240	204
(77, d6, e5, 3f) -> [0, ...4] = 0
0 -> coin

round 4:
hmac_sha256(client_seed:nonce:round, server_seed)

fe	74	a4	5e	9f	6b	c2	c0	b9	6a	f8	a8	d3	24	3f	ad	f7	bd	3d	72	24	26	8a	56	6d	4f	65	79	9e	8f	83	cc
254	116	164	94	159	107	194	192	185	106	248	168	211	36	63	173	247	189	61	114	36	38	138	86	109	79	101	121	158	143	131	204
(fe, 74, a4, 5e) -> [0, ...4] = 1
1 -> coin
```

Verify on [Github](https://bcgame-project.github.io/verify/coinflip.html?s=18fbbc01bbad8823f5a2e2380574119d61d6ae8d5ae1385761ac08a53fe813e8&c=34b3304ea17b8faed51f1a72af1bfb8f&n=6371&r=4)

This verifier seems to provide a breakdown of how the solution is reached whereas 1 is tails and 0 is heads

Otherwise as shown:

```
Input
18fbbc01bbad8823f5a2e2380574119d61d6ae8d5ae1385761ac08a53fe813e8
34b3304ea17b8faed51f1a72af1bfb8f
6371
4
Output

Round: 1
hmac_sha256(client_seed:nonce:round, server_seed)

e8	04	59	f1	e9	9f	ae	00	a5	7a	19	bf	be	7f	77	77	eb	f3	80	0c	2c	2f	e3	6e	ed	38	db	d6	94	a4	bb	54
232	4	89	241	233	159	174	0	165	122	25	191	190	127	119	119	235	243	128	12	44	47	227	110	237	56	219	214	148	164	187	84
Bytes to Number
(232, 4, 89, 241) -> [0, ... 4] = 1
       0.906250000    (232 / (256 ^ 1))
+    0.000061035    (4 / (256 ^ 2))
+    0.000005305    (89 / (256 ^ 3))
+    0.000000056    (241 / (256 ^ 4))
=    1.812632792     (* 2)
=    1

Round: 2
hmac_sha256(client_seed:nonce:round, server_seed)

b2	36	98	07	48	d2	18	f2	7d	db	ef	01	37	ee	af	3a	f6	89	c6	da	fa	70	62	1f	7e	01	b5	3b	5c	58	ea	5b
178	54	152	7	72	210	24	242	125	219	239	1	55	238	175	58	246	137	198	218	250	112	98	31	126	1	181	59	92	88	234	91
Bytes to Number
(178, 54, 152, 7) -> [0, ... 4] = 1
       0.695312500    (178 / (256 ^ 1))
+    0.000823975    (54 / (256 ^ 2))
+    0.000009060    (152 / (256 ^ 3))
+    0.000000002    (7 / (256 ^ 4))
=    1.392291072     (* 2)
=    1

Round: 3
hmac_sha256(client_seed:nonce:round, server_seed)

77	d6	e5	3f	66	f6	19	ea	0c	f5	66	fd	87	71	0f	18	01	95	03	b6	fb	74	ce	fd	88	e7	90	89	07	ec	f0	cc
119	214	229	63	102	246	25	234	12	245	102	253	135	113	15	24	1	149	3	182	251	116	206	253	136	231	144	137	7	236	240	204
Bytes to Number
(119, 214, 229, 63) -> [0, ... 4] = 0
       0.464843750    (119 / (256 ^ 1))
+    0.003265381    (214 / (256 ^ 2))
+    0.000013649    (229 / (256 ^ 3))
+    0.000000015    (63 / (256 ^ 4))
=    0.936245590     (* 2)
=    0

Round: 4
hmac_sha256(client_seed:nonce:round, server_seed)

fe	74	a4	5e	9f	6b	c2	c0	b9	6a	f8	a8	d3	24	3f	ad	f7	bd	3d	72	24	26	8a	56	6d	4f	65	79	9e	8f	83	cc
254	116	164	94	159	107	194	192	185	106	248	168	211	36	63	173	247	189	61	114	36	38	138	86	109	79	101	121	158	143	131	204
Bytes to Number
(254, 116, 164, 94) -> [0, ... 4] = 1
       0.992187500    (254 / (256 ^ 1))
+    0.001770020    (116 / (256 ^ 2))
+    0.000009775    (164 / (256 ^ 3))
+    0.000000022    (94 / (256 ^ 4))
=    1.987934633     (* 2)
=    1

```

So it seems to use the multi round function for each successive coin, whereas to produce the results, we would just need to increase the round number and apply a similar calculation as to the one found for Limbo for Stake but instead of multiplying the total of the first 4 numbers by 16777216 we multiply 2 supposedly. But that doesn't make much sense seeing as how round 3, 0.98... * 2 = 1.86 ish and round 4, 1.98... * 2 = 3.67 ish so if it meant divide by 2 and then rounded up or down then that might make more sense.
