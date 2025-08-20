function addTodo(){
    let inputText = document.getElementById("inputText");
    let inputValue = inputText.value.trim()
 
    let li = document.createElement("li");

    li.textContent = inputValue;

    //ul select

    let taskList = document.getElementById("taskList")
     
    taskList.appendChild(li)



    //delete list
    
    let deletBtn = document.createElement("button")
    deletBtn.classList.add("deleteBtn")
    deletBtn.textContent= "X";

    li.appendChild(deletBtn);

    // complete task
    li.onclick = function(){
        li.classList.toggle("complete")
    }
    
    //delete task

    deletBtn.onclick = function(){
        li.remove()
    }

    inputText.value=""
}