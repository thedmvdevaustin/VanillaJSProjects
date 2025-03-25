let inputValue = document.querySelector(".todoList__input");
const addTodosBtn = document.querySelector(".todoList__button");

//Add todo to todoList
addTodosBtn.addEventListener("click", function(e){
    e.preventDefault();
    const todos = this.parentElement.nextElementSibling
    if (inputValue.value==="") {
        alert("Please Enter a task before adding!")
        return
    };

    //create a new li with all the nested li elements inside it and set their classes
    const li = document.createElement("li");
    li.setAttribute("class", "todos__item");  //you can create and set with this

    li.innerHTML += `
    <p class="todo">${inputValue.value}</p>
        <div class="todos__buttons">
            <button class="todos__button fa-solid fa-check todos__button--yellow"></button>
            <button class="todos__button fa-solid fa-trash todos__button--red"></button>
        </div>`
    todos.appendChild(li);
    let todosBtns = document.querySelectorAll(".todos__buttons")
    inputValue.value = "";
    //mark todo Completed/UnCompleted or delete todo
    console.log(todosBtns)
    for (let i = 0; i < todosBtns.length; i++){
        todosBtns[i].addEventListener("click", function(e){
            console.log(e.target.parentElement.previousElementSibling)
            if (e.target.classList.contains("fa-check")){
                e.target.parentElement.previousElementSibling.classList.toggle("line-through");
            }
            if (e.target.classList.contains("fa-trash")){
                e.target.parentElement.parentElement.remove() //this is for more modern browsers, some old browsers might not support this in which you'll need to access the parent and use the .removeChild()
            }
        });
    };
});
