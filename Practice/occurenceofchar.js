var str=prompt("Enter the string")
var char=prompt("Enter the char to find its occurence")
var count=0;
for (i=0;i<str.length;i++){
    if(str[i]==char){
        count+=1;
    }
    else{
        
    }
}
console.log("The number of occurences of"+char+" in "+str+" is "+count)