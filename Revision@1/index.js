//program to reverse a name
// let name=prompt("Enter your name")
// let r_name=""
// for (i=0;i<name.length;i++){
//     r_name=name[i]+r_name
// }
// alert("Reverse of your name is "+r_name)

//write a program where you have 2obs in an array and each obj is
//  having key:value pair like id:1,name:vamsi,age:2, id:2,name:ravi,age:24 if age aove 24 print that objct
// let arr=[{id:1,pname:"vamsi",age:24},{id:2,pname:"chiru",age:21}]
// for(i=0;i<arr.length;i++){
//     if(arr[i].age>=24){
//         console.log(arr[i])
//     }
// }


//write a program where u need to show in doc that for every btn click the bg color of doc should b changed according to text content of button
// let button1=document.getElementById("btn1")
// let button2=document.getElementById("btn2")
// let button3=document.getElementById("btn3")

// let buttoncon1=button1.textContent
// let buttoncon2=button2.textContent
// let buttoncon3=button3.textContent



// button1.addEventListener("click",()=>{
//     document.body.style.background=buttoncon1
// })
// button2.addEventListener("click",()=>{
//     document.body.style.background=buttoncon2
// })
// button3.addEventListener("click",()=>{
//     document.body.style.background=buttoncon3
// })

//write a program to find the login credentials are matching and if matched then only need to show alert and 
// after clicking the alert o button , then h1 tag should be append to doc with docbgcolor as purple and text color white.
// let creds=[{name:"chiru",password:"1234567"},{name:"vamsi",password:"1234"},{name:"ramesh",password:"1222"},{name:"suresh",password:"1111"}]
// let username=prompt("Enter your Username")
// let passkey=prompt("Enter your Password")
// for(i=0;i<creds.length;i++){
//     if(creds[i].name==username && creds[i].password==passkey){
//         alert("Credentials matched")
//         let h1Tag=document.createElement("h1")
//         document.body.appendChild(h1Tag)
//         h1Tag.style.background="purple"
//         h1Tag.style.color="white"
//         h1Tag.textContent="Welcome"
//         break
//     }
    
// }

//i want to write program use only input type "file" tag to choose resume and u need to allow
//.pdf files , if resume is pdf format then succesful alert and otherwise choose only pdf files as alert.
let files=document.getElementById("file")
if(files.textContent.endsWith(".pdf")){
    alert("Successful Submission")
}
else{
    alert("choose only pdf files")
}