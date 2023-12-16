const form=document.getElementById("Todo_input_form");
const createButton=document.getElementById("form_button");
// console.log(form);
const listCount=document.getElementById("list_count");
let count=0;
listCount.innerText=count;
const todoElement=document.getElementById("todo");
const contentBox=document.getElementById("todo_list_container");
const emptyele=document.getElementById("empty_container");
const onsubmitform=(event)=>{
    event.preventDefault();
    count++;
    listCount.innerText=count;
    console.log(listCount);
    emptyele.className="clip_bord";
    todoElement.innerText="To-do List";
    // console.log(todoElement);
    const record=document.createElement("div");
    record.id="todo_list_content";
    const para=document.createElement("p");
    para.innerText=event.target.content.value;
    const deletebtn=document.createElement("button");
    const btnicon=document.createElement("span");
    btnicon.className="material-symbols-outlined";
   btnicon.innerText="delete";
   deletebtn.appendChild(btnicon);
    record.append(para,deletebtn);
    contentBox.appendChild(record);
    form.reset();
    deletebtn.addEventListener("click",deleteRecord);
    console.log(count);
}
function deleteRecord(event)
{
    count--;
    listCount.innerText=count;
    const deletebutton=event.target;
    const record=deletebutton.parentNode.parentNode;
    record.remove();
}

form.addEventListener("submit" ,onsubmitform);