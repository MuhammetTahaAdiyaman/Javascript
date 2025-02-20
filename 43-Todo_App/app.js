//*catch element or tag

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents(){
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",pageLoaded);
    secondCardBody.addEventListener("click",removeTodoUI);
    clearButton.addEventListener("click",AllTodoRemove);
    filterInput.addEventListener("keyup",SearhTodo);
}

function SearhTodo(e){
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".list-group-item");
    if(todoList.length > 0){
        todoList.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display: none !important");
            }
        });
    }else{
        showAlert("warning","Arama yapılması için en az 1 tane todo olması gerekmektedir!");
    }
}

function AllTodoRemove(){
    const todoList = document.querySelectorAll(".list-group-item");
    if(todoList.length > 0){
        //UI Temizleme
        todoList.forEach(function(todo){
            todo.remove();
        })

        //Storage Temizleme
        todos = [];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success","Tüm Todolar başarılı şekilde silindi.")
    }else{
        showAlert("warning","Tüm todoları temizlemek için en az 1 tane todo olması gerek!")
    }
}

function removeTodoUI(e){
    if(e.target.className == "fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoStorage(todo.textContent);
        showAlert("success","Todo başarılı şekilde kaldırıldı!");
    }
}

function removeTodoStorage(removeTodo){
    checkTodoEmpty();
    todos.forEach(function(todo,index){
        if(removeTodo === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function pageLoaded(){
    checkTodoEmpty();
    todos.forEach(function(todo){
        addTodoUI(todo);
    });
}

function addTodo(e){
    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        showAlert("warning","Lütfen boş bırakmayınız!")
    }else{
        addTodoUI(inputText);
        addTodoStorage(inputText);
        showAlert("success","Başarılı şekilde eklendi!");
    }
    e.preventDefault(); //submit olunca başka sayfaya yönlendirmeyi engelledik.
}
/*
     <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
*/
function addTodoUI(newTodo){
    const li = document.createElement("li");
    li.className="list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoStorage(newTodo){
    checkTodoEmpty();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodoEmpty(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type,message){
    const div = document.createElement("div");
    //literal template
    div.className = `alert alert-${type}`;
    //div.className = "alert alert-"+type;
    div.textContent = message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2500);
}