let count = 0;
function addTask() {
    
    let input = document.getElementById("input");
    let task = input.value;

    if(task === ""){
        alert("Please enter a task");
        return;
    } 

    let li = document.createElement("li");
    li.innerText = task;
    count++;
    document.getElementById("total").innerText = `Total tasks:   ` +  count;
    document.getElementById("task-list").appendChild(li);
    
    li.onclick = function() {
        li.style.textDecoration = "line-through";
    }   
    
    input.value = "";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function() {
        li.remove();
        count--;
     
         document.getElementById("total").innerText = `Total tasks: ${count}`;
    }
    li.appendChild(deleteBtn);
    
}

let button = document.getElementById("add-btn");

button.onclick = addTask;

document.getElementById("input").addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        addTask();
    }

});
document.getElementById("clear-btn").onclick = function() {
    document.getElementById("task-list").innerHTML = "";
    count = 0;
    document.getElementById("total").innerText = `Total tasks: ${count}`;
}