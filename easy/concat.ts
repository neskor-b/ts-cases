// Implement the JavaScript Array.concat function in the type system. 
// A type takes the two arguments. The output should be a new array that includes inputs in ltr order

type Concat<Ar1 extends readonly any[], Ar2 extends readonly any[]> = [...Ar1, ...Ar2]

type Result = Concat<[1], [2]> // expected to be [1, 2]