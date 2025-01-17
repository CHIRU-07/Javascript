async function datacalling(){
    let data= await fetch("https://dummyjson.com/products")
const fetcheddata=await data.json().then(res=>res).catch(err=>console.log(err))
console.log(fetcheddata)
let cat_list=document.getElementById("catlist")
let a=[]
fetcheddata.products.forEach(x=>{
    if(!a.includes(x.category)){
        a.push(x.category)
    }
});
    
for(i=0;i<a.length;i++){
   let list = document.createElement("ul");
      list.style.listStyleType = "disc"; 

     let listItem = document.createElement("li");
      listItem.innerText = `${a[i]}`;
      
      list.appendChild(listItem);
      cat_list.appendChild(list);
}
}
datacalling()