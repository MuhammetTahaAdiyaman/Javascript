//! EVENT(OLAY)
//? Event = bir şeyin tetiklendiğinde meydana gelmesini istediğimiz yapılardır.

//? 1-Direkt etiket içinde kullanılır ancak önerilmez.
/*

    <a href="#" 
    id="clearButton"  
    onclick = "alert('merhaba')"
    class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

*/

//? 2-Etiket içinde direkt fonksiyonu çağırabiliriz. JS tarafında fonk. gelir ve çalışır
/*

    <a href="#" 
    id="clearButton"  
    onclick = "changeTitle()"
    class="btn btn-primary btn-sm mt-3">Tüm Todoları Temizle</a>

*/

// function changeTitle(){
//     document.querySelectorAll(".card-title")[1].textContent = "Başlık Değişti";
// }

//? 3-En doğru kullanım ise eventListener() kullanımı.
//ilk önce etki edeceğimiz elementi yakala
//daha sonra eventListener() metodunu kullan.

const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener("click",changeTitle);

// function changeTitle(){
//     document.querySelectorAll(".card-title")[1].textContent = "Değişti";
// }

// biz fonksiyon üzerinden eventin tüm davranışına erişebiliriz.

function changeTitle(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
}