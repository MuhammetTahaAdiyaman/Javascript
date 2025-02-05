//! MOUSE EVENT(OLAY)

//*DOMContentLoaded = sayfa yüklendiği zaman tetiklenir

// document.addEventListener("DOMContentLoaded",run);

// function run(e){
//     console.log(e.type); //addEventListener metodunda çalıştırıldığı için oradaki eventin type'ını verir.
// }

//*load = sayfa yüklendiğinde tetiklenir fark bu event window üzerinden sağlanır

// window.addEventListener("load", run);

// function run(e){
//     console.log(e.type);
// }

//*click = elemente tıklanıldığında tetiklenir. Bundan dolayı hangi elemente uygulamak istersek önce elementi yakalayıp daha sonra o yakaladığımız element üzerinden event yapacağız.
//? "Todo Ekleyin" butonuna event uygulayalım.
// const todoEkle = document.querySelector("#todoAddButton");

// todoEkle.addEventListener("click",run);

// function run(e){
//     alert(e.target.textContent);
// }

//* dblclick = elemente iki kez tıklanıldığında tetiklenir.
// const todoEkle = document.querySelector("#todoAddButton");

// todoEkle.addEventListener("dblclick",run);

// function run(e){
//     alert(e.target.textContent);
// }

//* mouseover = elementin üzerine gelince tetiklenir.
//? bunu da todolistesi üzerinden örnek gösterelim.

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseover",run);

// function run(e){
//     console.log(e.type);
// }

//!NOT: Biz card-body'i yakaladık ve card body üzerine gelince tetiklensin demiştik öyle de oldu ve bu body içinde farklı yapılarda var li, a etiketleri gibi bunları da değişim saydığı için sürekli mouseover tetikleniyor.

//* mouseout = elementin dışına çıkınca tetiklenir.
//? bunu da todolistesi üzerinden örnek gösterelim.

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseout",run);

// function run(e){
//     console.log(e.type);
// }

//!NOT: Biz card-body'i yakaladık ve card body üzerinden çıkınca tetiklensin demiştik öyle de oldu ve bu body içinde farklı yapılarda var li, a etiketleri gibi bunları da değişim saydığı için sürekli mouseout tetikleniyor.

//* mouseenter = elementin üzerine gelince tetiklenir.
//? bunu da todolistesi üzerinden örnek gösterelim.

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseenter",run);

// function run(e){
//     console.log(e.type);
// }

//! NOT: mouseoverdan farkı element içindeki farklı etiketlerde olsa yalnızca hedeflenen elementi baz alır ve artış sağlamaz bir kez çalışır. Yapı içinde gezinirken tetiklenmez.

//* mouseleave = elementin üzerinden ayrılırken tetiklenir.
//? bunu da todolistesi üzerinden örnek gösterelim.

// const cardBody = document.querySelectorAll(".card-body")[1];

// cardBody.addEventListener("mouseleave",run);

// function run(e){
//     console.log(e.type);
// }

//! NOT: mouseout farkı element içindeki farklı etiketlerde olsa yalnızca hedeflenen elementi baz alır ve artış sağlamaz bir kez çalışır. Yapı içinde gezinirken tetiklenmez. Sadece hedef verdiğimiz etiket dışına çıkınca tetiklenir.
