const form = document.getElementById("Todo_input_form");
const createButton = document.getElementById("form_button");
// console.log(form);
const listCount = document.getElementById("list_count");
let count = 0;
let highprior=0;
let high=document.getElementById("high");
high.innerText=highprior;
listCount.innerText = count;
const todoElement = document.getElementById("todo");
const contentBox = document.getElementById("todo_list_container");
const emptyele = document.getElementById("empty_container");
// when we submit btn and used to create new list
const onsubmitform = (event) => {
  event.preventDefault();
  count++;
  listCount.innerText = count;
  console.log(listCount);
  emptyele.classList.add("clip_bord");
  todoElement.innerText = "To-do List";
  // console.log(todoElement);
  const record = document.createElement("div");
  record.id = "todo_list_content";
  // its is the text of todo list
  const para = document.createElement("input");
  para.id="gettext"
  para.value = event.target.content.value;
  para.setAttribute("readonly",true);

  const deletebtn = document.createElement("button");
  const btnicon = document.createElement("span");
  btnicon.className = "material-symbols-outlined";
  btnicon.innerText = "delete";
  const listcheckbox = document.createElement("input");
  listcheckbox.setAttribute("type", "checkbox");
  listcheckbox.classList="work_done";
  // this is used to eidt the content of lists
const editbtn=document.createElement("button")
editbtn.innerText="edit";
editbtn.addEventListener("click",(e)=>{
  console.log(e.target.innerText);
  if(e.target.innerText==="edit")
  {
// console.log(para);
para.focus();
para.removeAttribute("readonly",true);
e.target.innerText="save";
}
else{

e.target.innerText="edit";
para.value=para.value
para.setAttribute("readonly",true);

console.log(para.value);
}

  // editbtn.innerHTML="hogaya";
});
  deletebtn.appendChild(btnicon);
  record.append(listcheckbox, para, deletebtn,editbtn);
  contentBox.appendChild(record);
  form.reset();
  deletebtn.addEventListener("click", deleteRecord);
  listcheckbox.addEventListener("change",checkeded)
  // console.log(count);
};
// this is used to delete the record

function deleteRecord(event) {
  count--;
  listCount.innerText = count;
  const deletebutton = event.target;
  
  const record = deletebutton.parentNode.parentNode;
  record.remove();
if(count==0)
{
    emptyele.classList.remove("clip_bord");
}
}
function checkeded(event){
    if(this.checked)
    {
        highprior++;

    }
    else{
        highprior--;
    }
    high.innerText=highprior;
}

form.addEventListener("submit", onsubmitform);
