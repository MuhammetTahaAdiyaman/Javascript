//! Input Event

//* keypress = klavyeden bir tuşa basıldığında tetiklenir. Ancak sadece harf ve sayı tuşlarını algılar.

// document.addEventListener("keypress", run);

// function run(e){
//     console.log(e.key); //basılan harfi yakalarız
//     console.log(e.keyCode); //basılan harfin ascii codunu yakalarız
//     console.log(e.which); //ascii verir yine.
// }

//* keydown = klavyeden bir tuşa basıldığında tetiklenir. Tüm tuşları algılar.

// document.addEventListener("keydown", run);

// function run(e){
//     console.log(e.key); //basılan harfi yakalarız
//     console.log(e.keyCode); //basılan harfin ascii codunu yakalarız
//     console.log(e.which); //ascii verir yine.
// }

//* keyup = klavyede tuştan elini çektiği an tetiklenir.

// document.addEventListener("keyup", run);

// function run(e){
//     console.log(e.key); //basılan harfi yakalarız
//     console.log(e.keyCode); //basılan harfin ascii codunu yakalarız
//     console.log(e.which); //ascii verir yine.
// }

//! Örnek = sayfada f5'e basıldığında yenileme yapmasın ve kullanıcıya yenileme yapılamaz uyarısı verilsin.

// document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode == 116){
//         alert("Sayfa Yenilenemez");
//     }

//     e.preventDefault(); //default ayarları engelleme metodu.
// }


//! Örnek = input içine yazılan değeri başlığa aynı anda aktarma
//? bunun için mantık hem başlığı hem de inputu yakalayıp daha sonra input üzerinden event oluşturarak yapacağız.

const title = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

input.addEventListener("keyup",run);

function run(e){
    title.textContent = e.target.value;
}

//e.target = ile biz eventin tetiklendiği etiketin ne olduğunu yani tetiklenen element hedefini alıyoruz ve o hedefteki değeri almak içinde e.target.value diyoruz.