//!Element Silme
//? 1- direkt elemente ulaşıp silmek 2-annesi üzerinden silebiliriz.

//ilk önce listemize ulaşalım.

const todoList = document.querySelector(".list-group");
const todo = document.querySelectorAll(".list-group-item");

// todo[0].remove();
// todo[todo.length-1].remove();

//?------------------

todoList.removeChild(todo[1]); //node istiyor direkt 2 veya 3 belirtme parantez içine.
todoList.removeChild(todo[todo.length-1]);