var userinput=prompt("Enter the number")
Numblen=userinput.length
var sum=0;
for(let i=0;i<Numblen;i++){
    var digit=Number(userinput)%10;
    sum=digit+sum;
}
console.log("The sum of the digits of given number is"+sum)