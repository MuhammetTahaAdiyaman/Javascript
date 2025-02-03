//! Elementler Üzerinde Gezinme
//? parent-child-sibling üzerine gezinmeler nasıl yapılır bunu göreceğiz.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");
const row = document.querySelector(".row");

let value;
//! Anneden çocuklara erişim.
//? listeden; listenin maddelerine erişelim.
// value = todoList;
// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[3];
// value = todoList.children[todoList.children.length-1];
// value = todoList.children[3].textContent = "Değişti"

//?Çocukları foreach ile de döndürebiliriz.
// value = Array.from(todoList.children);
// value.forEach(function(todo){
//     console.log(todo.textContent)
// })

//! Çocuktan anneye erişim.
// value = todo;
// let ul = todo.parentElement;
// let cardBody = ul.parentElement;
// let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
// let container = row.parentElement;


//! Kardeşler arasında gezinmek
// value = todo;
// value = todo.nextElementSibling.nextElementSibling.nextElementSibling;
//?geriye de erişim sağlayabiliriz.
//?son elemana erişelim ve geriye doğru gezinelim.
// const lastElement = document.querySelector(".list-group-item:nth-child(4)");
// value = lastElement;
// value = lastElement.previousElementSibling.previousElementSibling;

//! Todo Listesi olan başlığı en geniş kapsamdan dara doğru erişerek değiştirelim.
// value = row;
// value = row.children[0].children[3].children[0].textContent = "Değiştir Babba"


//! Todo listesinin son elemanının ismini değiştirelim yine yukarıdaki mantık ile
value = row;
value = row.children[0].children[3].children[2].children[3].textContent = "Değiştir"

console.log(value);