# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

I used my own code from the previous 2 exercises. In this, I noticed there wasn't much increase in the runtime until the matrices reached a size of 10x10. The HK method seemed to take as much time as LS or longer. This does make sense as HK is programmed to make more accurate calculations, which of course would take more time. This becomes very apparent with the much larger matrix sizes. I stopped running the HK after a 21x21, because this would have taken an excruciating amount of time, while I allowed LS to do a massive 7000x7000 matrix. Of course this matrix took a lot of time, but it was much shorter than the HK would have taken. In fact it didn't take too much more time than the HK took to calculate just a 21x21.

The Paths found by HK were always the same as LS or shorter. This became much more apparent when dealing with a larger matrix. This of course is because of the HK trying to actuually find the optimal path, where as LS exploring different options, but maybe not finding the absolutely best option. You really start to see the difference around the 10x10 matrix, and the path sizes only continue to differ more from there.

Overall this exercise has really shown the tradeoff for speed versus optimization. The best algorithm would of course depend on the application.

https://en.wikipedia.org/wiki/Travelling_salesman_problem - Used this to understand more about the comparisons between all sorts of algorithms.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice
