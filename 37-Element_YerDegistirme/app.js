//! Element Yer Değiştirme
//? "replaceChild" ile değiştirilir. Bu method nodes ister onu da "childNodes" ile erişebiliriz.

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h2");
newTitle.className = "card-title";
newTitle.textContent = "TODO LİSTESİ - YENİ";

//biz değiştirmek istediğimizi node olarak vermemiz gerek önce hangisi ona bakalım.

console.log(cardBody.childNodes); //1.indis değeri olan başlığı değiştircez o zaman;

cardBody.replaceChild(newTitle, cardBody.childNodes[1]);