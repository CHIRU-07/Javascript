var a=0;
var b=1;
var c=prompt("Enter the number of fibonnocci series you want");
var sum=0;
console.log(a)
console.log(b)
for (let i =0;i<c-2;i++){
    sum=a+b
    console.log(sum)
    a=b
    b=sum

}