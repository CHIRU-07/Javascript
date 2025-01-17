const url="https://fakestoreapi.com/products"

 //filter button declarations
 let menbutton=document.getElementById("men")
 let womenbutton=document.getElementById("women")
 let elebutton=document.getElementById("ele")
 let jewbutton=document.getElementById("jew")
 let alldetails=document.getElementById("alldata")

 
 menbutton.addEventListener("click",()=>apifetching("men's clothing"))
 womenbutton.addEventListener("click",()=>apifetching("women's clothing"))
 elebutton.addEventListener("click",()=>apifetching("electronics"))
 jewbutton.addEventListener("click",()=>apifetching("jewelery"))
alldetails.addEventListener("click",()=>apifetching())
async function apifetching(cat){
  let data= await fetch(url)
  let datafetched= await data.json().then(res=>res).catch(res=>console.error(res))
  

  let container=document.getElementById("container")

  container.innerHTML=""

  const filtereddata = cat ? datafetched.filter(x=>x.category=== cat) : datafetched
//   console.log(filtereddata)
  filtereddata.forEach(x=>{
    // console.log(x)
      let card=document.createElement("div")
      card.style.border="2px black solid"
      card.style.width="400px"
      card.style.height="450px"
      

      card.innerHTML=`<img src=${x.image} width='250' height='300'>
         <p>${x.title}</p>
         <p>${x.price}</p>
         <button id="addtocart">Add to cart</button>
         <button id="Buynow">Buy now</button>`
     container.appendChild(card)
    
    card.addEventListener("click",cardclick)
    function cardclick(){
        localStorage.setItem("Card",JSON.stringify(x))
        location.href="./description.html"
    }
    
    card.querySelector("#addtocart").addEventListener("click",(e)=>{
        e.stopPropagation()
        //sweet alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: 'custom-toast-popup',
            title: 'custom-toast-title',
            icon: 'custom-toast-icon',
            timerProgressBar: 'custom-timer-progress-bar'
          },
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        
        Toast.fire({
          icon: "success",
          title: "Product added successfully"
        });
        //sweet alert
   
        let cartdata=JSON.parse(localStorage.getItem("cartitem")) || []
        cartdata.push(x)
        localStorage.setItem("cartitem",JSON.stringify(cartdata))

    })

    card.querySelector("#Buynow").addEventListener("click",(e)=>{
        e.stopPropagation()
        location.href="./buynow.html"
    })

})
}
apifetching()
