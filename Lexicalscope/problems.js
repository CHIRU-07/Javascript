var str="1731673"
// var st1=str.split("")
// var str_s=st1.sort()
// console.log("The min number is"+str_s[0])
// console.log("The max number is"+str_s.at(-1))
var max=str[0];
for(i=0;i<str.length;i++){
    if(max<str[i]){
        max=str[i]
    }
    else{
        max=max;
    }
}
console.log("The max number is "+max)