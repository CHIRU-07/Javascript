// Task:-- 
// Write a program to print
// 1-10
// 10-1
// -1 to -10
// -10 to -1
// Using while loop and
// Print even numbers and odd numbers using while loop and take userInput and print sum of even and sum of odd numbers from userInput

// print 1 to 10 
// var a=1;
// while(a<=10){
//     console.log(a)
//     a++
// }

// print 10 to 1
// var a=10;
// while(a>0){
//     console.log(a)
//     a--
// }

// print -1 to -10
// var a=-1;
// while(a>=-10){
//     console.log(a)
//     a--
// }

// print -10 to -1
// var a=-10;
// while(a<=-1){
//     console.log(a)
//     a++
// }

// Print even numbers and odd numbers using while loop and take userInput and print sum of even and sum of odd numbers from userInput
var Userinput=prompt("Enter the number")
var a=0;
Even_sum=0;
Odd_sum=0;
while(a <Userinput.length){
      
      if(Userinput[a]%2==0){
           Even_sum+= Number (Userinput[a])
           console.log(Userinput[a],"Even number")
      }
      else{
        console.log(Userinput[a],"Odd number")
        Odd_sum+= Number (Userinput[a])
     }
     a++

}
console.log("The sum of the even numbers is",Even_sum)
console.log("The sum of the odd numbers is",Odd_sum)

