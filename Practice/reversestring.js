var Inputstring=prompt("Enter the string")
var Reversestring="";
for (let i=0;i<=Inputstring.length-1;i++){
    Reversestring=Inputstring[i]+Reversestring
}
console.log(Reversestring)