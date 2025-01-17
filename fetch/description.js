let cardclicked=localStorage.getItem("Card")
if(cardclicked){
    try{
      const carddata=JSON.parse(cardclicked)
      const cardclickeddiv=document.getElementById("cardclickcontainer")
      const card=document.createElement("div")

      card.innerHTML=`
      <img src=${carddata.image} width='350'>
      <h1>${carddata.title}</h1>
      <p>${carddata.description}</p>`

      cardclickeddiv.append(card)
    }
    catch{
      console.error(error)
    }
}
else{
    console.error("No data found in local storage")
}



    
