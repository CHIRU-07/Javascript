var Inputstring=prompt("Enter the string")
var Vowel_count=0;
var Conso_count=0;
// for (let i=0;i<Inputstring.length;i++){
//     if(Inputstring[i]=="a" ||Inputstring[i]=="e"||Inputstring[i]=="i"||Inputstring[i]=="o"||Inputstring[i]=="u"){
//         Vowel_count+=1;
//     }
//     else if(Inputstring[i]=="A" ||Inputstring[i]=="E"||Inputstring[i]=="I"||Inputstring[i]=="O"||Inputstring[i]=="U"){
//         Vowel_count=+1;
//     }
//     else{
//         Conso_count+=1;
//     }
// }
// console.log("Number of vowels in that string "+Vowel_count)

var Vowels=["a","e","i","o","u","A","E","I","O","U"]
for (let i=0;i<Inputstring.length;i++){
    if(Vowels.includes(Inputstring[i])){
        Vowel_count+=1;
    }
    else{
        Conso_count+=1;
    }
}
console.log("Number of vowels in that string "+Vowel_count)
