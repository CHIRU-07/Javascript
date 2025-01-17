var Userinput=prompt("Enter the number")
var Reversenum="";
for (let i=0;i<Userinput.length;i++){
    Reversenum=Userinput[i]+Reversenum

}
if( Reversenum == Userinput){
    console.log("The Number is a Pallindrome")
}
else{
    console.log("The Number is not a Pallindrome")
}
console.log(Reversenum)
