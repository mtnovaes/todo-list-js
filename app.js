

const containerItems = document.querySelector(".container-items");
const inputTask = document.querySelector(".input-task");
const ulTaskList = document.querySelector(".ul-TaskList");
const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  
  

  
  let inputTaskValue = inputTask.value;
  let newLi = document.createElement("li");
  let spanTask = document.createElement("span");
  spanTask.textContent = inputTask.value;
  spanTask.contentEditable = false;
  ulTaskList.append(newLi);
  inputTask.value = "";
  let checkBoxTaskComplete = document.createElement("input");
  checkBoxTaskComplete.type = "checkbox";
  newLi.append(checkBoxTaskComplete, spanTask);

  // adicionar task concluido

  let btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Delete";
  newLi.appendChild(btnExcluir);

  btnExcluir.addEventListener("click", () => {
    newLi.remove();
  });
  // botao remover concluido
  checkBoxTaskComplete.addEventListener("change", () => {
    if (checkBoxTaskComplete.checked) {
      spanTask.classList.add("checked");
    } else {
      spanTask.classList.remove("checked");
    }
  });

    // botao editar concluido
  let editButton = document.createElement("button");
  editButton.classList.add('edit')
  editButton.textContent = 'Edit'
  editButton.addEventListener('click',(e)=>{
    e.preventDefault()
    spanTask.contentEditable = true
    spanTask.focus()

  })
    newLi.append(editButton)




  spanTask.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault()
        spanTask.contentEditable = false
    }
  })

});
