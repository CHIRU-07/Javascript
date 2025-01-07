const url="https://fakestoreapi.com/products"
async function apifetching(){
  let data= await fetch(url)
  let datafetched= await data.json().then(res=>res).catch(res=>console.error(res))


  let container=document.getElementById("container")
  datafetched.forEach(x=>{
    console.log(x)
      let card=document.createElement("div")
      card.style.border="2px black solid"
      card.style.width="500px"
      card.style.height="500px"
      

      card.innerHTML=`<img src=${x.image} width='250' height='300'>
         <p>${x.title}</P`
    container.appendChild(card)

    card.addEventListener("click",cardclick)
    function cardclick(){
        localStorage.setItem("Card",JSON.stringify(x))
        location.href="./description.html"

    }
  })



  //filter button declarations
  let menbutton=document.getElementById("men")
  let womenbutton=document.getElementById("women")
  let elebutton=document.getElementById("ele")
  let jewbutton=document.getElementById("jew")
  let alldatabut=document.getElementById("alldata")
  
  menbutton.addEventListener("click",filtermen)
  womenbutton.addEventListener("click",filterwomen)
  elebutton.addEventListener("click",filterele)
  jewbutton.addEventListener("click",filterjew)
  alldatabut.addEventListener("click",alldata)













 function filtermen(){
    container.innerHTML=""
    let mencloth=datafetched.filter(x=>x.category==="men's clothing")
     mencloth.forEach(x=>{
        let card=document.createElement("div")
      card.style.border="2px black solid"
      card.style.width="500px"
      card.style.height="500px"
      
     card.innerHTML=`<img src=${x.image} width='250' height='300'>
         <p>${x.title}</P`
     container.appendChild(card)
        })

    }
    function filterwomen(){
        container.innerHTML=""
        let womencloth=datafetched.filter(x=>x.category==="women's clothing")
         womencloth.forEach(x=>{
            let card=document.createElement("div")
          card.style.border="2px black solid"
          card.style.width="500px"
          card.style.height="500px"
          
         card.innerHTML=`<img src=${x.image} width='250' height='300'>
             <p>${x.title}</P`
         container.appendChild(card)
            })
    
        }
        function filterjew(){
            container.innerHTML=""
            let jews=datafetched.filter(x=>x.category==="jewelery")
             jews.forEach(x=>{
                let card=document.createElement("div")
              card.style.border="2px black solid"
              card.style.width="500px"
              card.style.height="500px"
              
             card.innerHTML=`<img src=${x.image} width='250' height='300'>
                 <p>${x.title}</P`
             container.appendChild(card)
                })
        
            }
            function filterele(){
                container.innerHTML=""
                let electr=datafetched.filter(x=>x.category==="electronics")
                 electr.forEach(x=>{
                    let card=document.createElement("div")
                  card.style.border="2px black solid"
                  card.style.width="500px"
                  card.style.height="500px"
                  
                 card.innerHTML=`<img src=${x.image} width='250' height='300'>
                     <p>${x.title}</P`
                 container.appendChild(card)
                    })
            
                }
                function alldata(){
                    container.innerHTML=""
                    let electr=datafetched.filter(x=>x.category==="electronics" || x.category==="women's clothing"|| x.category==="men's clothing"|| x.category==="jewelery" )
                     electr.forEach(x=>{
                        let card=document.createElement("div")
                      card.style.border="2px black solid"
                      card.style.width="500px"
                      card.style.height="500px"
                      
                     card.innerHTML=`<img src=${x.image} width='250' height='300'>
                         <p>${x.title}</P`
                     container.appendChild(card)
                        })
                
                    }
 }
 



apifetching()