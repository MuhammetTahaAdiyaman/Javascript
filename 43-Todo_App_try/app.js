//* Etiketleri yakalama

const form = document.querySelector("#todoAddForm");
const addTodo = document.querySelector("#todoName");
const searchTodo = document.querySelector("#todoSearch");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const allClearButton = document.querySelector("#clearButton");

let todos = [];

//tüm eventleri bir fonksiyonda toplayalım.

run();

function run(){
    form.addEventListener("submit",addInput);
    document.addEventListener("DOMContentLoaded", loadedFunc);
    secondCardBody.addEventListener("click", remove);
    allClearButton.addEventListener("click",allRemove);
    searchTodo.addEventListener("keyup", search);
}

//todo ekleme fonksiyonu

function addInput(e){
    let inputValue = addTodo.value.trim();
    if(inputValue == null || inputValue == ""){
        showAlert("warning","Lutfen boş değer girmeye çalışmayınız!");
    }
    else{
        //UI
        addTodoUI(inputValue);
        //Local Storage
        addTodoStorage(inputValue);

        showAlert("success","todo başarılı şekilde eklendi!");
    }

    e.preventDefault();
}
/*
     <li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
*/

//UI için ekleme
function addTodoUI(input){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = input;

    const a = document.createElement("a");
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addTodo.value = "";
}

//Local Storage için ekleme

function addTodoStorage(input){
    checkTodoEmpty();
    todos.push(input);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function checkTodoEmpty(){
    if(localStorage.getItem("todos") === null ){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

//bilgilendirme mesajı

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

//storage'dan veri çekme
function loadedFunc(){
    checkTodoEmpty();
    todos.forEach(function(todo){
        addTodoUI(todo);
    });
}

//todo silme
function remove(e){
    if(e.target.className == "fa fa-remove"){
        let todo = e.target.parentElement.parentElement;
        todo.remove();
        removeTodoStorage(todo.textContent);
        showAlert("success","Todo başarılı şekilde kaldırıldı!");
    }
    
}

function removeTodoStorage(removedTodo){
    checkTodoEmpty();
    todos.forEach(function(todo,index){
        if(removedTodo == todo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

//tüm todoları temizleme

function allRemove(){
    const todoList1 = document.querySelectorAll(".list-group-item");
    if(todoList1.length > 0){
        
      todoList1.forEach(function(todo){
        todo.remove();
      });  
    
     todos = [];
     
     localStorage.setItem("todos",JSON.stringify(todos));
    
     showAlert("success","Tüm Todolar başarılı şekilde silindi.")

    }else{
        showAlert("warning","todo temizlemek için en az 1 tane kayıt olması gerek!")
    }
}

//filter

function search(e){
    let value = e.target.value.trim().toLowerCase();
    let todoList = document.querySelectorAll(".list-group-item");
    if(todoList.length > 0){
        todoList.forEach(function(todo){
            if(todo.textContent.trim().toLowerCase().includes(value)){
                todo.setAttribute("style","display : block");
            }else{
                todo.setAttribute("style","display: none !important");
            }
        });
    }else{
        showAlert("warning","aramak için en az 1 tane todo olması gerek!")
    }
}