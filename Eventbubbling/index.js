let grand=document.getElementById("grand")
let parent=document.getElementById("parent")
let child=document.getElementById("child")

grand.addEventListener("click",a,false)
parent.addEventListener("click",b,false)
child.addEventListener("click",c,false)

function a(e){
    grand.style.background="red"
    console.log("clicked on grand")
    e.stopPropagation()
    setTimeout(()=>{
        grand.style.background="white"},1000
    )
}
function b(e){
    parent.style.background="green"
    console.log("clicked on parent")
    e.stopPropagation()
    setTimeout(()=>{
        parent.style.background="white"},2000
    )
}
function c(e){
    child.style.background="blue"
    console.log("clicked on child")
    e.stopPropagation()
    setTimeout(()=>{
        child.style.background="white"},3000
    )
}
