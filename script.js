function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");

    if (todoInput.value.trim() !== "") {
        var li = document.createElement("li");

        var taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = todoInput.value;
        li.appendChild(taskText);

        var editInput = document.createElement("input");
        editInput.className = "edit-input";
        editInput.value = todoInput.value;
        editInput.style.display = "none";
        li.appendChild(editInput);

        var btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        var editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.innerHTML = "Edit";
        editBtn.onclick = function() { toggleEdit(this); };
        btnGroup.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = function() { deleteItem(this); };
        btnGroup.appendChild(deleteBtn);

        li.appendChild(btnGroup);

        todoList.appendChild(li);
        todoInput.value = "";
    } else {
        alert("Please enter a task");
    }
}

function toggleEdit(btn) {
    var listItem = btn.parentNode.parentNode;
    var taskText = listItem.querySelector('.task-text');
    var editInput = listItem.querySelector('.edit-input');
    var editMode = editInput.style.display === "none";

    if (editMode) {
        taskText.style.display = "none";
        editInput.style.display = "block";
        editInput.focus();
    } else {
        taskText.textContent = editInput.value;
        taskText.style.display = "inline-block";
        editInput.style.display = "none";
    }
}

function deleteItem(btn) {
    btn.parentNode.parentNode.remove();
}
