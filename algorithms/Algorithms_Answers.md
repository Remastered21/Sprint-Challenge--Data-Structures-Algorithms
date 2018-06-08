Add your answers to the Algorithms exercises here.

# Exercise 1

a) Θ(n)

b) Θ(log(n))

c) Θ(sqrt(n))
, inner loops are based on constants. (8)

d) Θ(n * log(n))

e) Θ(log(n)) // see what the answer may be.
, inner loops have decrementing iterations as `n` advances.

f) Θ(n)

g) Θ(n)

## Exercise 2

a) 
function maxDiff(arr) {
  let min = arr[0];
  let maxDiff = 0;

  arr.forEach(value => {
    min = Math.min(min, value);
    maxDiff = Math.max(maxDiff, value - min);
  });
  return maxDiff;
}

b) strategy: split floors into two halves, then test each side.

## Exercise 3

a)

b)
