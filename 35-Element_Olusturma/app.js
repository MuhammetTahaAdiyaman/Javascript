//! Element oluşturma
//sayfada yer alan buton yanına bir buton ekleyelim. ilk önce ekleyeceğimiz alanı seçelim.

const cardBody = document.querySelectorAll(".card-body")[1];
console.log(cardBody);

//eklemek istediiğimiz tag'i oluşturmak için "createElement" kullanılır.

const link = document.createElement("a");
link.id = "goGoogle";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.google.com";
link.target = "_blank";
link.innerHTML = "Google";

//butonu konumlandırmak için seçtiğimiz alana "appendChild" ile ekleriz.

cardBody.appendChild(link);


//? şimdi todolist'e js ile yeni bir todo 5 adında madde ekleyelim. Aşağıdaki yapıya göre oluşturalım

/*
 <li class="list-group-item d-flex justify-content-between">Todo 1
      <a href="#" class="delete-item">
         <i class="fa fa-remove"></i>
       </a>
</li>
*/
//ilk önce eklemek istediğimiz alanı seçelim.
const todoList = document.querySelector(".list-group");

//şimdi yapıya göre oluşturalım.

const li = document.createElement("li");
const a = document.createElement("a");
const i = document.createElement("i");

li.className = "list-group-item d-flex justify-content-between";
li.innerHTML = "Todo 5";

a.href = "#";
a.className = "delete-item";

i.className = "fa fa-remove"

//en içten dışa doğru ekleyelim.

a.appendChild(i);
li.appendChild(a);
todoList.appendChild(li);