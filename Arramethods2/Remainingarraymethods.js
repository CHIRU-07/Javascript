//every()
var array1=[1,2,3,4,5,6]
var newary1=array1.every(x=>x>0)
var newary2=array1.every(x=>x>2)
console.log(newary1)
console.log(newary2)

//fill()
var array2=[1,2,4,5,0]
var Fillarr=array2.fill("vam",1,3) // value to fill , start index , end index
console.log(Fillarr)

//find()
var array3=[1,2,3,4,5,6]
var findary=array3.find(x=>x>1) // prints 1st value that satisfies this condition
console.log(findary)

//flat()
let array4=[1,[3,5,[893,21,5,0,[9761,23,567,[9,2,1,0]]]]]
let flatarr1=array4.flat()
let flatarr2=array4.flat(2) // no of times to flattened the list
let flatarr3=array4.flat(Infinity)
console.log(flatarr1)
console.log(flatarr2)
console.log(flatarr3)

//includes()
let fruits = ['apple', 'banana', 'orange'];
let hasBanana = fruits.includes('banana');
console.log(hasBanana);  // Output: true

//sort()
let nums=[99,1,2,45,12,4,2,200,100]
// var sortarr1=nums.sort((x,y)=>x-y) // ascending
var sortarr2=nums.sort((x,y)=>y-x) //descending
// console.log(sortarr1)
console.log(sortarr2)

//splice()
let cricket=["virat","rohit","bumrah","kl"]
// cricket.splice(index, count, item1, ....., itemX) index to start from , count= no of items to delete , item1,2,... to be added
// cricket.splice(1,2,"kohli","sharma","siraj","jaiswal") adds element
// cricket.splice(0,1)// deleting element
cricket.splice(0,1,"kohli")// replacing
console.log(cricket)