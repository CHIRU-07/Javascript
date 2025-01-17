function Addfn(){
    let inputtasks=document.getElementById("inputtask")
let inputval= inputtasks.value.trim()

if(inputval===""){
    alert("No task has added")
}
// console.log(inputval)

let divTag=document.getElementById("tasks")
let tasklist=document.createElement("li")

//tasktitle
let tasktitle=document.createElement("h2")
tasktitle.textContent=inputval

//Edit btn
let Editbtn=document.createElement("button")
Editbtn.textContent="Edit"
Editbtn.classList.add="Edit-btn"

//delete btn
let delbtn=document.createElement("button")
delbtn.textContent="Delete"
delbtn.classList.add="del-btn"


//appending to list
tasklist.appendChild(tasktitle)
tasklist.appendChild(Editbtn)
tasklist.appendChild(delbtn)

tasklist.style.listStyle="none"
divTag.appendChild(tasklist)
inputtasks.value=""

//DELETE button
delbtn.addEventListener("click",()=>deletebutton(tasklist)) 

//Edit button
Editbtn.addEventListener("click",()=>editbutton(tasklist))


}

function deletebutton(taskdel){
    // console.log(taskdel)
    let x=confirm("Are you sure to delete this task")
    if(x){
    taskdel.remove()
    }

}

function editbutton(titleedit){
    // console.log(titleedit);
    let currenttext=titleedit.querySelector("h2")
    let edittext=prompt("Enter the new task ,Your old task is "+currenttext.textContent)
    if(edittext !=="" && edittext.trim !==""){
        currenttext.textContent=edittext
    } 
    else{
        alert("Something wrong ")
        prompt("Type to edit ",currenttext)
    }
}
