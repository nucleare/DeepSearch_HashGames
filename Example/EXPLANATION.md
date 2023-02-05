# Explanation of Examples

## [0] The Server Seed and Client Seed File
Shows how you want to list your server seed and client seed, delimited by a comma (",")

## [1] The Output Hash Generated
When running `python ..\[1]OutputHashGenerator-1000nonce.py [0]Server-Client-Seeds.txt [1]Example-OutputHashGen.txt`

The first seed pair with it's 1000 results will appear at the beginning of the output file denoted as `[1]Example-OutputHashGen.txt`

fe8ff24859844caa772f959747612cbab36fda2d9475189d6f2d5546ec2dbe93,HsWCaELP0o,1,efe7b014b1248fdec3bd8e125b1f5ced73ffa77f19494cdefde66f1628ca24e2

fe8ff24859844caa772f959747612cbab36fda2d9475189d6f2d5546ec2dbe93 - the server seed<br>
                                                      HsWCaELP0o - the client seed<br>
                                                               1 - the nonce<br>
efe7b014b1248fdec3bd8e125b1f5ced73ffa77f19494cdefde66f1628ca24e2 - The Resulting Hash<br>

. . .

**...999 lines later**

```
fe8ff24859844caa772f959747612cbab36fda2d9475189d6f2d5546ec2dbe93,HsWCaELP0o,1000,417425f6ee8e0fc87ba0bf8d09e934d5bb583e457e0126efb8d7af621ff97aed
552ed0b7904bd0064e2ff186a6bcb4b4236f551b1f8f1d4b66724f125af7a325,aenbHxFQNg,1,9ad2924a8d65c0d52948a2f1eea0305132c219def6b002e3ca19b7bb7a4f8ba1
552ed0b7904bd0064e2ff186a6bcb4b4236f551b1f8f1d4b66724f125af7a325,aenbHxFQNg,2,7892c72d1a6042bdc0e8a485bd5ecec76d148460e9044eaf731d413faa0ccefd
552ed0b7904bd0064e2ff186a6bcb4b4236f551b1f8f1d4b66724f125af7a325,aenbHxFQNg,3,1a4436163ff143e1fcf47324aef203f3032c01d698672eccbb62563030c0a439
```
As delimited by commas: Server Seed Used, Client Seed Used, Nonce Used, Resulting Game Hash of 0 Cursor Increment


## [2] The Limbo Output Generated
When running `python ..\[2]OutputHashto-2-Limbo.py [1]Example-OutputHashGen.txt [2]Example-Limbo-Output.txt`

The resulting file is fairly self explanatory:

```
Casino Seed, First 4 Bytes, Limbo Result
efe7b014b1248fdec3bd8e125b1f5ced73ffa77f19494cdefde66f1628ca24e2,    Seed to Bytes: 239, 231, 176, 20,   Limbo Result: 1.05
e0ab0f943383c78bc02e5eab96baa756eb4077fddf3aa25c88a540cfa242a1cd,    Seed to Bytes: 224, 171, 15, 148,   Limbo Result: 1.12
27ed94480c12437a99acf13d412060cb9f957e759d382527172c5447703e8f09,    Seed to Bytes: 39, 237, 148, 72,   Limbo Result: 6.34
48b0468f7cf7e9b4e196c231b07b1138ae93f928323de0ef05de91d09b2da6d7,    Seed to Bytes: 72, 176, 70, 143,   Limbo Result: 3.48
```

Whereas 
 - "Casino Seed" refers to the output hash generated in the previous step. <br>
 - "Seed to Bytes" is what you'd see on the provably fair checker at [https://stake.us/provably-fair/calculation?game=limbo](https://stake.us/provably-fair/calculation?game=limbo&c=Github) and [https://stake.com/provably-fair/calculation?game=limbo](https://stake.com/provably-fair/calculation?game=limbo&c=guestpass) as shown below. <br>
 - "Limbo Result: 1.05" is well, the game output result.<br>

--------

Example of provably fair calculation provided on [Stake.us](stake.us/?c=Github) and [Stake.com](stake.com/?c=guestpass) when using the following parameters:
 - Game: Limbo
 - Server Seed: fe8ff24859844caa772f959747612cbab36fda2d9475189d6f2d5546ec2dbe93
 - Client Seed: HsWCaELP0o
 - Nonce: 459
  
~~

**Final Result**

1675.8595338512764 <br>

**Casino Seeds to Bytes**

HMAC_SHA256(fe8ff24859844caa772f959747612cbab36fda2d9475189d6f2d5546ec2dbe93,HsWCaELP0o:459)

00	26	b6	c8	a5	1b	6f	84	c1	1a	d2	f5	48	d6	f4	85	b4	d8	cb	9b	6f	18	e4	84	cd	02	c0	57	5f	80	5f	d5 <br>
0	38	182	200	165	27	111	132	193	26	210	245	72	214	244	133	180	216	203	155	111	24	228	132	205	2	192	87	95	128	95	213 <br>

**Bytes to Number**

(0, 38, 182, 200) -> [0, ..., 16777215] = 9910 <br>
0	.000000000000	(000 / (256 ^ 1 )) <br>
+	0	.000579833984	(038 / (256 ^ 2 )) <br>
+	0	.000010848045	(182 / (256 ^ 3 )) <br>
+	0	.000000046566	(200 / (256 ^ 4 )) <br>
=	0	.000590728596	(* 16777216) <br>
=	9910	.781250000000 <br>

**Raw to Edged**

16777216 / (9910 + 1) * (1 - 0.01) = 1675.8595338512764 <br>
