# Collect Observation of Hilo

In an attempt to simply find a verication module for the game Hilo on BC.games, neither the provably fair page nor the 3rd party checkers had one. But when going into the game itself and using the help modal, I was able to discover the on-site verifier which happened to provide a breakdown of how the cards were caluclated and as far as the game result calculation is concerned, it appears to be identical. Granted, the hash calculations are different, but they both use a round generation to calculate each card.

Below is simply for reference for how the checker on the site appears to work:


```
Input
Server Seed
51a8f197680be916d9b01867fcc99cbacae739d5e11f7aa28e0b5570d9881484
Client Seed
00ff0000ff000000ff
Nonce
658854
Round
1
Output
Sha256(server_seed)
8e4b9177e45cb533bb3a5e6c52187528f4679748a897628fe5423d5a313e2eda
HMAC_Sha256(client_seed:nonce:round, server_seed)
78954b10cbb0c7c46aa00385a9943674d18639c405e27ff58d52a39aa399eca1
Bytes
78	95	4b	10	cb	b0	c7	c4	6a	a0	03	85	a9	94	36	74	d1	86	39	c4	05	e2	7f	f5	8d	52	a3	9a	a3	99	ec	a1
120	149	75	16	203	176	199	196	106	160	3	133	169	148	54	116	209	134	57	196	5	226	127	245	141	82	163	154	163	153	236	161
Bytes to Number
(120, 149, 75, 16) => [0, ..., 52)
= 24
0.468750000	(120 / (256^1))
+	0.002273560	(149 / (256^2))
+	0.000004470	(075 / (256^3))
+	0.000000004	(016 / (256^4))
=	0.471028034
*	52
=	24.493457749
Final Result
♠Q,24,172
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22	23	24	25	26	27	28	29	30	31	32	33	34	35	36	37	38	39	40	41	42	43	44	45	46	47	48	49	50	51
♠A	♥4	♣7	♦10	♠2	♣K	♥5	♣8	♦J	♠3	♥6	♦Q	♣9	♥A	♣4	♦7	♠10	♥2	♦K	♣5	♦8	♠J	♥3	♣6	♠Q	♦9	♣A	♦4	♠7	♥10	♣2	♠K	♦5	♠8	♥J	♣3	♦6	♥Q	♠9	♦A	♠4	♥7	♣10	♦2	♥K	♠5	♥8	♣J	♦3	♠6	♣Q	♥9
161	180	199	218	162	205	181	200	219	163	182	220	201	177	196	215	
```
