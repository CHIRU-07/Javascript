//inline binding
var Btn1=document.getElementById("btn1")
var Btn2=document.getElementById("btn2")
var Btn3=document.getElementById("btn3")
function oneclick(){
   Btn1.style.fontSize="1.5rem"
   Btn1.style.backgroundColor="red"
   Btn1.style.color="black"
}
function twoclick(){
   Btn2.style.fontSize="1.5rem"
   Btn2.style.backgroundColor="purple"
   Btn2.style.padding="10px"
   Btn2.style.color="black"
}
function hovered(){
    Btn3.style.fontSize="1.5rem"
    Btn3.style.backgroundColor="green"
    Btn3.style.padding="10px"
    Btn3.style.color="black"
    Btn3.style.borderRadius="20px"
 }

 var image1=document.querySelector("img")

 function imgclick(){
    image1.src="https://i.pinimg.com/736x/03/a1/96/03a19605d556f8e579a274f318c904f5.jpg"
    image1.style.borderRadius="50%"
 }


 //Event binding the image
 var image2=document.getElementById("img2")
 image2.onclick=function (){
     image2.src="https://i.pinimg.com/236x/da/7e/0e/da7e0ec85f932fa70aea96ec3a1c0aa3.jpg"
    image2.style.borderRadius="50%"
 }

 //Events on input
 var input1=document.getElementById("input1")
 input1.onmouseover=function(){
          input1.style.background="red"
}

input1.onmouseleave=function(){
    input1.style.background="white"
}

//Keyboard events
var input2=document.getElementById("input2")
input2.onkeyup=function() {
    input2.style.background="purple"
}
var input3=document.getElementById("input3")
input3.onkeydown=function() {
    input3.style.background="black"
    input3.style.color="white"
}
var input4=document.getElementById("input4")
input4.onkeypress=function() {
    input4.style.background="red"
    input4.style.color="white"
}