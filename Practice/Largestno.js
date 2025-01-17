var Number1=prompt("Enter the 1st number")
var Number2=prompt("Enter the 1st number")
var Number3=prompt("Enter the 1st number")
var temp;
if(Number1>Number2 && Number1>Number3){
    temp=Number1
}
else if(Number2>Number1 && Number2>Number3){
    temp=Number2
}
else if(Number3>Number1 && Number3>Number2){
    temp=Number3
}
console.log("The Largest Number is "+temp)