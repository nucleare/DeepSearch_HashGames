/*
// Below is taken from the thread found at https://news.ycombinator.com/item?id=28886698 in searching if someone
// Else had previously thought of usingZ3 as I was hoping, and it appears there has been discussion about it.
// Therefore, We've taken it and included here as reference for starting our own adaptation where we hope to
// incorporate the equivalent Z3 code for the integer options. For context, some of the preceding comments
// are included below:

## SideQuark on Oct 16, 2021

"It's quite simple. Z3 supports every basic integer option out of the box. You literally write the same code as 
the original prng. Instead of a uint32, or uint64, or float32, etc., you use the Z3 equivalent type. That's it. 
You define the state as unknown, but same Z3 type as in C or JavaScript. Then you run the function once. Set it 
to the output you see, repeat a few observed outputs, then tell Z3 to solve for the original unknown state.

It's absolutely trivial, taking a few lines of code.
I've broken all sorts of code using similar tools."
	

## SideQuark on Oct 18, 2021

Here's a simple example finding a hidden seed. It takes around 1, 2, or 3 values in a row and finds the seed. 
You can adapt this to all sorts of breaking problems, but for some you'll have to learn more about SATs and be 
careful how you code things. Note the simple PRNG I chose doesn't reveal all the state, yet over time you can 
deduce all of it.

// Code begins below - nucleare
*/

  // Code to demonstrate finding the hidden seed of a PRNG with Z3
  // Chris Lomont Oct 2021
  // Answering this comment on Hacker News https://news.ycombinator.com/item?id=28886698

  // Start by getting Z3, a theorem prover from Microsoft, via nuget. See https://github.com/Z3Prover/z3
  using Microsoft.Z3;
  using System;

  // get a solution
  ulong Solution(Context ctx, BoolExpr f, BitVecExpr seed)
  {
    Solver s = ctx.MkSolver();
    s.Assert(f); // assert constraint into solver
    if (s.Check() == Status.SATISFIABLE)
    {
        var m = s.Model;
        Expr e = m.Evaluate(seed);
        return ulong.Parse(e.ToString());
    }
    else
        throw new Exception("Fatal error");

  }

  // simple PRNG, used in many old C libs
  UInt32 next = 0x1234;
  UInt32 rand()
  {
    next = next \* 214013 + 2531011;
    return (next / 65536) % 32768;
  }

  void Test()
  {
    var R = new Random();
    next = (uint)R.Next();
    var start = next;
    Console.WriteLine($"Starting seed {next:X8}");

    using (var ctx = new Context())
    {
        // 32 bit vector type
        Sort bv_type = ctx.MkBitVecSort(32);

        // unknown seed - we will solve for this
        BitVecExpr seed = ctx.MkBVConst("seed", 32);

        // constants used in the PRNG
        BitVecExpr c214 = (BitVecNum)ctx.MkNumeral("214013", bv_type);
        BitVecExpr c253 = (BitVecNum)ctx.MkNumeral("2531011", bv_type);
        BitVecExpr c65536 = (BitVecNum)ctx.MkNumeral("65536", bv_type);
        BitVecExpr c32768 = (BitVecNum)ctx.MkNumeral("32768", bv_type);

        // track the boolean to satisfy
        BoolExpr be = ctx.MkTrue();

        var next = seed; // start here
        int pass = 0;
        while(true)
        {
            ++pass;
            if (pass > 10) break;
            // the sampled random
            var r = rand();
            BitVecExpr rndBV = (BitVecNum)ctx.MkNumeral(r, bv_type);

            // make this code using Z3 variables
            //next = next * 214013 + 2531011;
            //return (next / 65536) % 32768;
            next = ctx.MkBVAdd(ctx.MkBVMul(next, c214), c253);
            var ret = ctx.MkBVURem(ctx.MkBVUDiv(next, c65536), c32768);

            // add a constraint boolean for this "Z3 ret = returned value"
            be = ctx.MkAnd(be, ctx.MkEq(ret, rndBV));

            // get solution
            var val = Solution(ctx, be, seed);
            // todo - can check unique by adding "seed != soln" to the boolean and checking
            Console.WriteLine($"{pass} : 0x{val:X8}");
            if (val == start)
                break; // done - can also break when shown unique
        }
    }
  }
  Test();
