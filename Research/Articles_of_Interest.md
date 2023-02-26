# References to Academic Research

As it relates to otherwise attempting to explain in some "smart-sounding" way the phenomenon one experiences when an outcome is predicted and results are as predicted. Whereas the explanation of why or how sometimes we see a result and feel as if we "knew it" but made a decision counter-intuitively to that notion. While other times, the brave prosper off "going with their gut" and somehow, miraculously getting it right.

Is it really just luck? Or is it perhaps a subsconscious calculation made that traverses our conscious thought as a predicted outcome but eludes our sense of confidence in that it cannot be consciously comprehended by the limitations of our consciously known world?

Thus, we refer to the following papers with little to no pre-determined understanding of whether or not it applies...

*** 

In no special order....

### Pseudorandom Numbers and Hash Functions from Iterations of Multivariate Polynomials
https://arxiv.org/abs/0908.4519

Dynamical systems generated by iterations of multivariate polynomials with slow degree growth have proved to admit good estimates of exponential sums along their orbits which in turn lead to rather stronger bounds on the discrepancy for pseudorandom vectors generated by these iterations. Here we add new arguments to our original approach and also extend some of our recent constructions and results to more general orbits of polynomial iterations which may involve distinct polynomials as well. Using this construction we design a new class of hash functions from iterations of polynomials and use our estimates to motivate their "mixing" properties.


### Strictly Frequentist Imprecise Probability
https://arxiv.org/abs/2302.03520

Strict frequentism defines probability as the limiting relative frequency in an infinite sequence. What if the limit does not exist? We present a broader theory, which is applicable also to random phenomena that exhibit diverging relative frequencies. In doing so, we develop a close connection with the theory of imprecise probability: the cluster points of relative frequencies yield an upper probability. We show that a natural frequentist definition of conditional probability recovers the generalized Bayes rule. This also suggests an independence concept, which is related to epistemic irrelevance in the imprecise probability literature. Finally, we prove constructively that, for a finite set of elementary events, there exists a sequence for which the cluster points of relative frequencies coincide with a prespecified set which demonstrates the naturalness, and arguably completeness, of our theory.


### A mathematical problem for security analysis of hash functions and pseudorandom generators
https://arxiv.org/abs/1206.0069

In this paper, we specify a class of mathematical problems, which we refer to as "Function Density Problems" (FDPs, in short), and point out novel connections of FDPs to the following two cryptographic topics; theoretical security evaluations of keyless hash functions (such as SHA-1), and constructions of provably secure pseudorandom generators (PRGs) with some enhanced security property introduced by Dubrov and Ishai [STOC 2006]. Our argument aims at proposing new theoretical frameworks for these topics (especially for the former) based on FDPs, rather than providing some concrete and practical results on the topics. We also give some examples of mathematical discussions on FDPs, which would be of independent interest from mathematical viewpoints. Finally, we discuss possible directions of future research on other cryptographic applications of FDPs and on mathematical studies on FDPs themselves.


### Inequalities and tail bounds for elementary symmetric polynomial with applications
https://arxiv.org/abs/1402.3543

We study the extent of independence needed to approximate the product of bounded random variables in expectation, a natural question that has applications in pseudorandomness and min-wise independent hashing.
For random variables whose absolute value is bounded by 1, we give an error bound of the form σΩ(k) where k is the amount of independence and σ2 is the total variance of the sum. Previously known bounds only applied in more restricted settings, and were quanitively weaker. We use this to give a simpler and more modular analysis of a construction of min-wise independent hash functions and pseudorandom generators for combinatorial rectangles due to Gopalan et al., which also slightly improves their seed-length.
Our proof relies on a new analytic inequality for the elementary symmetric polynomials Sk(x) for x∈Rn which we believe to be of independent interest. We show that if |Sk(x)|,|Sk+1(x)| are small relative to |Sk−1(x)| for some k>0 then |Sℓ(x)| is also small for all ℓ>k. From these, we derive tail bounds for the elementary symmetric polynomials when the inputs are only k-wise independent.


### Design and evaluation of chaotic iterations based keyed hash function
https://arxiv.org/abs/1706.08101

Investigating how to construct a secure hash algorithm needs in-depth study, as various existing hash functions like the MD5 algorithm have recently exposed their security flaws. At the same time, hash function based on chaotic theory has become an emerging research in the field of nonlinear information security. As an extension of our previous research works, a new chaotic iterations keyed hash function is proposed in this article. Chaotic iterations are used both to construct strategies with pseudorandom number generator and to calculate new hash values using classical hash functions. It is shown that, by doing so, it is possible to apply a kind of post-treatment on existing hash algorithms, which preserves their security properties while adding Devaney's chaos. Security performance analysis of such a post-treatment are finally provided.


### Randen - fast backtracking-resistant random generator with AES+Feistel+Reverie
https://arxiv.org/abs/1810.02227

Algorithms that rely on a pseudorandom number generator often lose their performance guarantees when adversaries can predict the behavior of the generator. To protect non-cryptographic applications against such attacks, we propose 'strong' pseudorandom generators characterized by two properties: computationally indistinguishable from random and backtracking-resistant. Some existing cryptographically secure generators also meet these criteria, but they are too slow to be accepted for general-purpose use. We introduce a new open-sourced generator called 'Randen' and show that it is 'strong' in addition to outperforming Mersenne Twister, PCG, ChaCha8, ISAAC and Philox in real-world benchmarks. This is made possible by hardware acceleration. Randen is an instantiation of Reverie, a recently published robust sponge-like random generator, with a new permutation built from an improved generalized Feistel structure with 16 branches. We provide new bounds on active s-boxes for up to 24 rounds of this construction, made possible by a memory-efficient search algorithm. Replacing existing generators with Randen can protect randomized algorithms such as reservoir sampling from attack. The permutation may also be useful for wide-block ciphers and hashing functions.


### Algorithms for Similarity Search and Pseudorandomness
https://arxiv.org/abs/1906.09430

We study the problem of approximate near neighbor (ANN) search and show the following results:
- An improved framework for solving the ANN problem using locality-sensitive hashing, reducing the number of evaluations of locality-sensitive hash functions and the word-RAM complexity compared to the standard framework.
- A framework for solving the ANN problem with space-time tradeoffs as well as tight upper and lower bounds for the space-time tradeoff of framework solutions to the ANN problem under cosine similarity.
- A novel approach to solving the ANN problem on sets along with a matching lower bound, improving the state of the art.
- A self-tuning version of the algorithm is shown through experiments to outperform existing similarity join algorithms.
- Tight lower bounds for asymmetric locality-sensitive hashing which has applications to the approximate furthest neighbor problem, orthogonal vector search, and annulus queries.
- A proof of the optimality of a well-known Boolean locality-sensitive hashing scheme.
We study the problem of efficient algorithms for producing high-quality pseudorandom numbers and obtain the following results:
- A deterministic algorithm for generating pseudorandom numbers of arbitrarily high quality in constant time using near-optimal space.
- A randomized construction of a family of hash functions that outputs pseudorandom numbers of arbitrarily high quality with space usage and running time nearly matching known cell-probe lower bounds.


### Random Bit Generator Mechanism Based on Elliptic Curves and Secure Hash Function
https://arxiv.org/abs/2002.09239

Pseudorandom bit generators (PRBG) can be designed to take the advantage of some hard number theoretic problems such as the discrete logarithm problem (DLP). Such type of generators will have good randomness and unpredictability properties as it is so difficult to find an easy solution to the regarding mathematical dilemma. Hash functions in turn play a remarkable role in many cryptographic tasks to achieve various security strengths. In this paper, a pseudorandom bit generator mechanism that is based mainly on the elliptic curve discrete logarithm problem (ECDLP) and hash derivation function is proposed. The cryptographic hash functions are used in consuming applications that require various security strengths. In a good hash function, finding whatever the input that can be mapped to any pre-specified output is considered computationally infeasible. The obtained pseudorandom bits are tested with NIST statistical tests and it also could fulfill the up-to-date standards. Moreover, a 256×256 grayscale images are encrypted with the obtained pseudorandom bits following by necessary analysis of the cipher images for security prove.

***

# Perhaps Far-fetched
We might be reaching with these topics though... we added their respective categories for reference.

### Time-Space Tradeoffs for Element Distinctness and Set Intersection via Pseudorandomness
Computer Science > Data Structures and Algorithms
https://arxiv.org/abs/2210.07534

In the Element Distinctness problem, one is given an array a1,…,an of integers from [poly(n)] and is tasked to decide if {ai} are mutually distinct. Beame, Clifford and Machmouchi (FOCS 2013) gave a low-space algorithm for this problem running in space S(n) and time T(n) where T(n)≤O˜(n3/2/S(n)1/2), assuming a random oracle (i.e., random access to polynomially many random bits). A recent breakthrough by Chen, Jin, Williams and Wu (SODA 2022) showed how to remove the random oracle assumption in the regime S(n)=polylog(n) and T(n)=O˜(n3/2). They designed the first truly polylog(n)-space, O˜(n3/2)-time algorithm by constructing a small family of hash functions H⊆{h|h:[poly(n)]→[n]} with a certain pseudorandom property.
In this paper, we give a significantly simplified analysis of the pseudorandom hash family by Chen et al. Our analysis clearly identifies the key pseudorandom property required to fool the BCM algorithm, allowing us to explore the full potential of this construction. As our main result, we show a time-space tradeoff for Element Distinctness without random oracle. Namely, for every S(n),T(n) such that T≈O˜(n3/2/S(n)1/2), our algorithm can solve the problem in space S(n) and time T(n). Our algorithm also works for a related problem Set Intersection, for which this tradeoff is tight due to a matching lower bound by Dinur (Eurocrypt 2020). As two additional contributions, we show a more general pseudorandom property of the hash family, and slightly improve the seed length to sample the pseudorandom hash function.


### Provable Fairness for Neural Network Models using Formal Verification
Computer Science > Machine Learning
https://arxiv.org/abs/2212.08578

Machine learning models are increasingly deployed for critical decision-making tasks, making it important to verify that they do not contain gender or racial biases picked up from training data. Typical approaches to achieve fairness revolve around efforts to clean or curate training data, with post-hoc statistical evaluation of the fairness of the model on evaluation data. In contrast, we propose techniques to \emph{prove} fairness using recently developed formal methods that verify properties of neural network models.Beyond the strength of guarantee implied by a formal proof, our methods have the advantage that we do not need explicit training or evaluation data (which is often proprietary) in order to analyze a given trained model. In experiments on two familiar datasets in the fairness literature (COMPAS and ADULTS), we show that through proper training, we can reduce unfairness by an average of 65.4\% at a cost of less than 1\% in AUC score.


### Maximum likelihood estimator for skew Brownian motion: the convergence rate
Mathematics > Statistics Theory
https://arxiv.org/abs/2302.02954

We give a thorough description of the asymptotic property of the maximum likelihood estimator (MLE) of the skewness parameter of a Skew Brownian Motion (SBM). Thanks to recent results on the Central Limit Theorem of the rate of convergence of estimators for the SBM, we prove a conjecture left open that the MLE has asymptotically a mixed normal distribution involving the local time with a rate of convergence of order 1/4. We also give a series expansion of the MLE and study the asymptotic behavior of the score and its derivatives, as well as their variation with the skewness parameter. In particular, we exhibit a specific behavior when the SBM is actually a Brownian motion, and quantify the explosion of the coefficients of the expansion when the skewness parameter is close to −1 or 1.


### A data variation robust learning model based on importance sampling
Statistics > Machine Learning
https://arxiv.org/abs/2302.04438

A crucial assumption underlying the most current theory of machine learning is that the training distribution is identical to the testing distribution. However, this assumption may not hold in some real-world applications. In this paper, we propose an importance sampling based data variation robust loss (ISloss) for learning problems which minimizes the worst case of loss under the constraint of distribution deviation. The distribution deviation constraint can be converted to the constraint over a set of weight distributions centered on the uniform distribution derived from the importance sampling method. Furthermore, we reveal that there is a relationship between ISloss under the logarithmic transformation (LogISloss) and the p-norm loss. We apply the proposed LogISloss to the face verification problem on Racial Faces in the Wild dataset and show that the proposed method is robust under large distribution deviations.


https://arxiv.org/

# Applicable Subjects

### Hex to Decimal
https://byjus.com/maths/hex-to-decimal/

### Decimal to Hex
https://byjus.com/maths/decimal-to-hex-conversion/

