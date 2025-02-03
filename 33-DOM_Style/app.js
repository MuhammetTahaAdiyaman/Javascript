//! DOM ile style özelliğini kullanma

//? todo listesindeki ilk elemente etki yapalım.

const todo = document.querySelectorAll(".list-group-item")[0];
console.log(todo); //kontrol

todo.style.backgroundColor = "purple";
todo.style.color = "white"; 
todo.style.fontWeight = "bold";
todo.style.paddingTop = "10px";

//? "tüm todoları temizle" butonuna etki edelim.

const clearButton = document.querySelector("#clearButton");
console.log(clearButton);

clearButton.style.backgroundColor = "red";
clearButton.style.padding = "20px";
clearButton.style.borderRadius = "20px";