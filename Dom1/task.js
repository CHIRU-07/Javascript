let p1tag=document.getElementById("p1")
p1tag.style.background="red"
p1tag.style.height="28px"
p1tag.style.borderRadius="10px"
p1tag.style.cursor="pointer"

console.log(p1tag)
function oneclick(){
    p1tag.innerText="This is P-tag when clicked"
    p1tag.style.background="purple";
    p1tag.style.borderRadius="15px";
    p1tag.style.height="35px"
    p1tag.style.color="white";
    p1tag.style.padding="10px";
    p1tag.style.boxShadow="10px 10px 10px black"
}

function doubleclick(){
    p1tag.innerText="This is P tag when double clicked"
    p1tag.style.background="green";
    p1tag.style.borderRadius="20px";
    p1tag.style.height="45px"
    p1tag.style.color="black";
    p1tag.style.padding="13px";
    p1tag.style.boxShadow="8px 8px 8px black"
    p1tag.style.fontSize="1.5rem"
}

function hoverstart(){
    p1tag.innerText="This is P tag when hovered"
    p1tag.style.background="yellow";
    p1tag.style.borderRadius="20px";
    p1tag.style.height="50px"
    p1tag.style.color="black";
    p1tag.style.padding="15px";
    p1tag.style.boxShadow="8px 8px 8px black"
    p1tag.style.fontSize="1.8rem"
}

