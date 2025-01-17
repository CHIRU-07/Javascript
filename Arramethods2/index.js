//map method in array
var arr1=[1,2,4,5,7]
var arr2=[4,16,25,64,100]
var str="Chiru"
var arr4=["100","200","300","400","4542"]
console.log(arr1.map(x=>x*2))
console.log(arr1.map(x=>x**2))
console.log(arr2.map(x=>Math.sqrt(x)))
var arr3=str.split("")
console.log(arr3)
console.log(arr3.map(X=>X+"a"))
console.log(arr4.map(x=>parseInt(x)))//The parseInt() function converts strings to integers. 
// When used with map(), it converts each element of an array of strings to integers.
//  This explains that the map function can take another function as a callback function that has one parameter and another optional parameter.

//filter method in array
