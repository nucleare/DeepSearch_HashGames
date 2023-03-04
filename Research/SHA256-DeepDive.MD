# Likely Pointless Data

It's a well-known fact that SHA256 hashes change dynamically at the slightltest change of any single character, it's placement, or it's removal. And, it's neither feasibly reaosnable nor practical to attempt to discover some sort of hash collission, though in theory they exist. But, just to entertain some ideas, I wanted to take note of certain hashes, for the purpose of comparison and a sort of "behaviorial" analysis.

Take note that for all intents and purposes, the more applicable study would encompass HMAC-SHA256 hashing as that is what is used to create the output hashes used in determining game outcomes.

### Notes on HMAC-SHA256

A general reference taken from [What's the difference between HMAC-SHA256(key, data) and SHA256(key + data)](https://security.stackexchange.com/questions/79577/whats-the-difference-between-hmac-sha256key-data-and-sha256key-data)

> HMAC is more complex than simple concatenation.

> As a simplistic example, if you were to simply concatenate key + data, then "key1"+"data" yields identical results to "key"+"1data", which is suboptimal. HMAC will yield different results for each. There are other flaws with simple concatenation in many cases, as well; see cpast's answer for one.

> The specification for HMAC is called [RFC2104](https://www.ietf.org/rfc/rfc2104.txt), which you should read if you have this level of interest.

> In summary, to implement HMAC, you should first:

> Create "ipad", which is 0x36 repeated BLOCKSIZE times. Create "opad", which is 0x5c repeated BLOCKSIZE times.

 - Note that BLOCKSIZE is 64 bytes for MD5, SHA-1, SHA-224, SHA-256, and 128 bytes for SHA-384 and SHA-512, per [RFC2104](https://www.ietf.org/rfc/rfc2104.txt) and [RFC4868](https://www.ietf.org/rfc/rfc4868.txt).


> Then HMAC is defined as:

`HASH(Key XOR opad, HASH(Key XOR ipad, text)) or, in detail from the RFC,`

```
(Pretext: The definition of HMAC requires a cryptographic hash function, which we denote by H, and 
a secret key K. We assume H to be a cryptographic hash function where data is hashed by iterating 
a basic compression function on blocks of data. We denote by B the byte-length of such blocks.)
```

```
(1) append zeros to the end of K to create a B byte string
    (e.g., if K is of length 20 bytes and B=64, then K will be
     appended with 44 zero bytes 0x00)
(2) XOR (bitwise exclusive-OR) the B byte string computed in step
    (1) with ipad
(3) append the stream of data 'text' to the B byte string resulting
    from step (2)
(4) apply H to the stream generated in step (3)
(5) XOR (bitwise exclusive-OR) the B byte string computed in
    step (1) with opad
(6) append the H result from step (4) to the B byte string
    resulting from step (5)
(7) apply H to the stream generated in step (6) and output
    the result
```

Additional Response to the same post:


> There's actually a very big problem with SHA256(key||data): SHA-256, along with SHA-512, SHA-1, MD5, and all other hashes using the Merkle–Damgård construction, is vulnerable to a length extension attack: given H(x), it's very simple to find H(x||y), even if you only know the length of x, because of how the construction works.

> (Essentially, the construction works like this: You have a variable state that starts at some fixed value specified in the algorithm. You split the input to the hash function into blocks of size specified in the algorithm (padding the last block if it's too short), and for each block, you use the current block and the current state to compute the new state using some special function specified in the algorithm. The value of state after processing the last block is the hash value. With any function using this construction, if you have the length of x, you can compute the padding p used. Then if you have H(x), you have the state after processing every block of x||p, which means you can proceed from there to compute H(x||p||y)).

> That means that an attacker who knows the length of your MAC key and knows a particular value of SHA256(key||data) can easily compute SHA256(key||data||otherdata) for some given otherdata. They can choose most of the other data, but even if they couldn't, it's a fatal flaw in a MAC scheme if an attacker without the key can forge any MAC-data pair from other legitimate MAC-data pairs.

> Incidentally, SHA256(data||key), while not vulnerable to length extension, is vulnerable to collisions in SHA256, which can also produce collisions in the proposed MAC, due to the same iterated construction. HMAC's nesting prevents these and various other attacks. With non-Merkle-Damgård hashes, you don't necessarily need the HMAC construction, though.



### Logic
If given a series of hashes and told they were part of a sequence in some shape or form, it would be nearly impossible to determine what sort of sequence rules determine the order of the hashes let alone would you be able to predict the next hash in the sequence without being told the rules of the sequence, especially since they're made up of numbers and letters and the relationship they have to one another could be based on either it's digest or the cipher text. 

But, even knowing the sequence, it would still be impossible to predict the next hash of a sequence, right? Or is it? That's what I hope to find out. Below is a sort of independent test vector referemnce tan;e. though not nearly intended or as sophisticated as the [official one](https://www.di-mgt.com.au/sha_testvectors.html).


# Random Data Collection
The following list is merely to comprise data for reference.

Input (Plaintext)                     Output Hash (ciphertext)
