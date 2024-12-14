//Code to print if given a number is prime or not.
var a=+prompt("Enter the number")
var count=0;
for(let i=0;i<=a;i++){
    if(a%i==0){
        count++
    }

}
if(count==2){
    console.log(a+" is a prime number")
}
else{
    console.log(a+" is not a prime number")

}