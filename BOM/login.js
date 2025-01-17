let loginreg=document.getElementById("loginreg")

loginreg.addEventListener("submit",(e)=>{
    let loginemail=document.getElementById("loginemail").value
    let loginpass=document.getElementById("loginpass").value

    e.preventDefault()
    let loginfromstorage=JSON.parse(localStorage.getItem("AllUserdetails"))

    loginfromstorage.filter(x=>{
        x.email==loginemail && x.password==loginpass
        
    })
})