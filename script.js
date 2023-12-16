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
  const para = document.createElement("p");
  para.innerText = event.target.content.value;
  const deletebtn = document.createElement("button");
  const btnicon = document.createElement("span");
  btnicon.className = "material-symbols-outlined";
  btnicon.innerText = "delete";
  const listcheckbox = document.createElement("input");
  listcheckbox.setAttribute("type", "checkbox");

  deletebtn.appendChild(btnicon);
  record.append(listcheckbox, para, deletebtn);
  contentBox.appendChild(record);
  form.reset();
  deletebtn.addEventListener("click", deleteRecord);
  listcheckbox.addEventListener("change",checkeded)
  // console.log(count);
};
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
