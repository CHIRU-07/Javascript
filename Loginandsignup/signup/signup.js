
let createaccount=document.getElementById("create")

createaccount.addEventListener("click",(e)=>{
    let nameval=document.getElementById("name")
    let emailval=document.getElementById("email")
    let passval=document.getElementById("pass")
    
    e.preventDefault()
    e.stopPropagation()
    
    let userdetails=JSON.parse(localStorage.getItem("userdetails")) || []
    let x={"Name":nameval.value,"Email":emailval.value,"Password":passval.value}
    userdetails.push(x)
if(x.Name!="" && x.Email!="" && x.Password!=""){
  localStorage.setItem("userdetails",JSON.stringify(userdetails))
  // Swal.fire({
  //     title: "Good job!",
  //     text: "You clicked the button!",
  //     icon: "success"
  //   });
  alert("Account Created Successfully")
  location.href="../index.html"
}else{
  alert("pls fill all fileds before signup")
}
})


