var str1="hello morning , how u doing"
//startsWith()
console.log(str1.startsWith("he")) //true
console.log(str1.startsWith("mo")) //false
//endswith()
console.log(str1.endsWith("doing")) //true
console.log(str1.endsWith("i")) //false

//lastIndexOf()
var str2="He is the best,best of all the best bowlers"
console.log(str2.lastIndexOf("best")) // 31 

//repeat()
var str3="50% off!!"
console.log(str3.repeat(4))

//replace()
var str4="Hii helloo i am xxxx i am "
console.log(str4.replace("am","hero")) // replaces only one occurence

//padstart()  and padEnd()
var str5="bumrah is great"
console.log(str5.padStart(20,"X"))
console.log(str5.padEnd(20,"oO"))

//splice need to do still
// var str7="Border gavasker tropy india vs aus"

//substring()
var str6="weather is so cool"
console.log(str6.substring(3,7)) // 3 is start value and 7 is end value

//substr()
console.log(str6.substr(5,10)) // 5 is start value and 10 is the length 