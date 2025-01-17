let formregis=document.getElementById("formreg")

formregis.addEventListener("submit",(e)=>{
    let n=document.getElementById("name").value
    let em=document.getElementById("email").value
    let pa=document.getElementById("pass").value

    e.preventDefault() 
    const Userdetails={
        Name:n,
        Email:em,
        Password:pa
    }
let Datafromstorage=JSON.parse(localStorage.getItem("AllUserdetails")) || []
Datafromstorage.push(Userdetails)

localStorage.setItem("AllUserdetails",JSON.stringify(Datafromstorage))

location.href="./login.html"

})
