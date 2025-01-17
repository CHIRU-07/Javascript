var arr=[12,13,1,3,87,21,5,10]
// var S_arr=arr.sort((x,y)=> x-y)
// The comparison function is (x, y) => y - x. This will:
// Return a negative value if y is smaller than x (put y before x).
// Return a positive value if y is greater than x (put x before y).
// Return 0 if x and y are equal (no change in their order).
// Sorting Process (Descending):
// Now we compare pairs of elements using y - x to sort in descending order
var S_arr=arr.sort((x,y) =>Math.abs(x)-Math.abs(y) )
// Explanation of Math.abs:
// The function Math.abs() returns the absolute value of a number, which is the non-negative version of that number. For example:
// Math.abs(-3) returns 3
// Math.abs(7) returns 7
// Math.abs(-1) returns 1
// Math.abs(5) returns 5
// When sorting by absolute values, you are comparing the magnitudes (distances from zero) of the numbers,
//  ignoring whether they are positive or negative.
console.log(S_arr)
console.log("The minimum number in array is "+S_arr[0])
console.log("The maximum number in array is "+S_arr.at(-1))
