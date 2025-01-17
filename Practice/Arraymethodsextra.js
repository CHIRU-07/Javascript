// Q1: Given the string "I love coding", split the string, reverse the order, join it back into a string, add the word "JavaScript" to the end,
//  and then remove the last element. Finally, return the length of the resulting array.
// Output: 3
// var string="I love coding"
// var arr=string.split(" ")
// arr.reverse();
// console.log(arr)
// arr.push("Javascript")
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.length)

// Q2: Given the arrays arr1 = [10, 20, 30] and arr2 = [40, 50], remove the first element from arr1, add 100 to the beginning, 
// concatenate arr1 with arr2, find the index of 50, and slice the array from index 2 to the end. What is the resulting sliced array?
// Output: [30, 40, 50]
// var arr1=[10,20,30];
// var arr2=[40,50];
// arr1.shift()
// arr1.ushift(100)
// var arr3=arr1.concat(arr2);
// console.log(arr3.indexOf(50))
// var S_arr=arr3.slice(2)
// console.log(S_arr)

// Q3: Given the array arr = [1, 2, 3, 4, 5], add the number 10 to the end, remove the last element, reverse the array,
//  check if the number 3 is in the reversed array, and find the index of 3. What is the final index of 3?
// Output: 1
// var arr=[1,2,3,4,5]
// arr.push(10)
// arr.pop()
// arr.reverse()
// console.log(arr)
// console.log(arr.includes(3))
// console.log(arr.indexOf(3))


// Q4: Given the string "learning is fun", split the string into an array of words, 
// reverse the array, join the array back into a string, add the word "indeed" to the beginning, and return the length of the modified array.
// Output: 4
// var str="learning is fun"
// var arr=str.split(" ")
// arr.reverse()
// str=arr.join()
// console.log(str)
// console.log(arr)
// arr.unshift("indeed")
// console.log(arr.length)

// Q5: Given the arrays arr1 = [5, 10] and arr2 = [15, 20, 25], concatenate both arrays,
//  add 30 to the end, remove the first element, check if the number 15 is included, and slice the array starting from the second element.
//   What is the resulting array?
// Output: [10, 15, 20, 25, 30]
// var arr1=[5,10];
// var arr2=[15,20,25];
// var arr3=arr1.concat(arr2)
// arr3.push(30)
// arr1.shift()
// console.log(arr3.includes(15))
// var arr4=arr3.slice(1)
// console.log(arr4)

// Q6: Given the array arr = ['apple', 'banana', 'mango', 'orange'], add "grape" to the end,
//  remove the last element, slice the array from index 1 to 3, check if "banana" is included, 
//  and join the array into a single string. What is the final string?
// Output: "banana,mango"
// var arr=['apple', 'banana', 'mango', 'orange'];
// arr.push("grape")
// arr.pop()
// var arr2=arr.slice(1,3)
// console.log(arr2.includes("banana"))
// var str=arr2.join()
// console.log(str)

// Q7: Given the array arr = [3, 6, 9, 12], add 0 to the beginning, remove the first element,
//  reverse the array, concatenate it with [15, 18], and find the index of 9. What is the final index of 9?
// Output: 3
// var arr=[3, 6, 9, 12]
// arr.unshift(0)
// arr.shift()
// arr.reverse()
// console.log(arr.indexOf(9))
// var arr2=arr.concat([15,18])
// console.log(arr2)
// console.log(arr2.indexOf(9))

// Q8: Given the string "welcome to the world", split it into an array of words,
//  reverse the array, join it back into a string, add the word "adventure" to the end,
//   and check if the word "to" is included. What is the final array?
// Output: ["world", "the", "to", "welcome", "adventure"]
// var str="welcome to the world";
// arr=str.split(" ")
// arr.reverse()
// str=arr.join("")
// arr.push("adventure")
// console.log(arr.includes("to"))
// console.log(arr)

// Q9: Given two arrays arr1 = [4, 8, 12] and arr2 = [16, 20, 24],
//  add 28 to arr2, concatenate both arrays, slice the array from the 3rd to 7th element,
//   reverse the sliced array, and find the index of 16. What is the final index of 16?
// Output: 1
// var arr1 = [4, 8, 12];
// var arr2 = [16, 20, 24];
// arr2.push(28)
// var arr3=arr1.concat(arr2)
// var arr4=arr3.slice(3,7)
// arr4.reverse()
// console.log(arr4.indexOf(16))

// Q10: Given the array arr = ['dog', 'cat', 'fish', 'bird'],
//  add "rabbit" to the beginning, remove the last element,
//   join the array into a string with "-" as the separator, check if "cat" is included, 
//   and slice the array from index 1 to 3. What is the resulting array?
// Output: ['cat', 'fish']
var arr=['dog', 'cat', 'fish', 'bird'];
arr.unshift("rabbit")
arr.pop()
var str=arr.join("-")
console.log(arr.includes("cat"))
var arr1=arr.slice(1,3)
console.log(str)
console.log(arr1)


