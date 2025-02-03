//! DOCUMENT OBJECT MODEL
//? DOM = DOM sayesinde biz html elementlerine ulaşıp o elementler üzerinde değişiklik yapabiliriz.
//? Daha öncede belirttim en geniş view nesnesi --> document --> ... gidiyor

//*NOT: Biz JS tarafından HTML etiketlerini 3 farklı yöntem ile seçip yakalayabiliriz.
/*
    * 1) ID
    * 2) CLASS
    * 3) TAG NAME (ETİKET)
 */

//! 1-) getElementById: id'ye göre elementi yakalar.
//? 'todoEkleyin' butonunu yakalayalım.

const button = document.getElementById("todoAddButton");
//console.log(button);

//?biz yakaladıktan sonra buton üzerinden çeşitli attribute ulaşabiliriz.
// console.log(button.id);
//?aşağıdaki yöntem ile de id'ye erişebiliriz.
// console.log(button.getAttribute("id"))

//?butonda yer alan classlara erişelim.
// console.log(button.className);
//?aynı şekilde böyle de erişebiliriz.
// console.log(button.getAttribute("class"))
//?classları biz liste olarak da erişebiliriz.
// const classList = button.classList;
// console.log(classList);
//?dilediğimiz classı da seçebiliriz.
// const classList = button.classList[2];
// console.log(classList);

//?yakaladığımız butonun textine erişip değiştirmek de isteyebiliriz.
// let buttonText = button.textContent;
// console.log(buttonText);
//?innerHTML ile de erişebiliriz ancak ikisi arasındaki farktan da bahsedeceğiz.
// let buttonText2 = button.innerHTML;
// console.log(buttonText2);

//* NOT: eğer ben html etiketi kullanarak isimde değişiklik yapmak istersek innerHTML kullanmalıyız.
// button.textContent = "<b> BUTON </b>";
//direkt etiketler gözüktü halbuki biz kalınlaştırmak istiyorduk şimdi bir de innerHTML ile deneyelim.
// button.innerHTML = "<b> BUTON </b>";

//! 2-) getElementsByClassName: class ismine göre elementi yakalar.
//? list-group-item yakalayalım.

// const todoList = document.getElementsByClassName("list-group-item");
// console.log(todoList);

//biz htmlcollection olarak döndü eğer biz foreach ile dönmek istersek array dönüşümü yapmamız gerek.
// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo)
// })

//yukarıdakinin textine erişebiliriz.
// const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// todoList.forEach(function(todo){
//     console.log(todo.textContent)
// })

//! 3-) getElementsByTagName: etiket ismine göre elementi yakalar.
//? sayfamızda iki tane form kullandık şimdi onları yakalayalım.

// let forms = document.getElementsByTagName("form");
// console.log(forms);

//bunu da foreach ile dönmek istersek array yapalım. yoksa hata alırız.
// let forms = Array.from(document.getElementsByTagName("form"));
// forms.forEach(function(form){
//     console.log(form);
// })

//! ------------------------------------------------------------------------------------------------------------------------

//! biz yukarıda 3 tane yapıdan bahsettik bunlar; getElementById, getElementsByClassName, getElementsByTagName ancak bunun 3ünü de tek bir yerde kullanabiliriz.
//! querySelector ve querySelectorAll kullanabiliriz.

/*
    * querySelector --> css tekniği ile seçim yaparız. id = #, class = . şeklinde
*/

//? Sayfamızda bulunan "Tüm todoları temizle" butonunu yakalayalım.
// const clearButton = document.querySelector("#clearButton");
// console.log(clearButton);

//? class adı "list-group" olan elementi yakalayalım.
// const todoList = document.querySelector(".list-group");
// console.log(todoList);

//? list-group-item 4 tane element içerir eğer querySelector kullanırsak sadece 1 tane gösterir burada hepsine yakalamak istersek eğer querySelectorAll kullanmamız gerek.
// const todoList = document.querySelectorAll(".list-group-item");
// console.log(todoList);

//mesela ben buradan 2.elementi seçmek istiyorum.
// const todoList = document.querySelectorAll(".list-group-item")[1];
// console.log(todoList);

//dizinin son elemanını almak için.
// const todoList = document.querySelectorAll(".list-group-item")[document.querySelectorAll(".list-group-item").length-1];
// console.log(todoList);

//! css tekniği ile yazdığımız için burada :first-child, :last-child, :nth-child(n) kullanabiliriz.
// const todoList = document.querySelectorAll("li");
// console.log(todoList);

//? eğer ilk elemana yani çocuğa erişmek istersek.
// const todoList = document.querySelectorAll("li:first-child");
// console.log(todoList);

//? eğer son elemana yani çocuğa erişmek istersek
// const todoList = document.querySelectorAll("li:last-child");
// console.log(todoList);

//? eğer arada bir elemana erişmek istersek.
// const todoList = document.querySelectorAll("li:nth-child(2)");
// console.log(todoList);

//* nth-child(odd) --> tekleri nth-child(even) --> çiftleri ancak bunlar indise göre değil normal değere göre hareket eder.
//*çift olanların arkasını gri yapalım.
const todoList = document.querySelectorAll("li:nth-child(even)");
todoList.forEach(function(el){
    el.style.backgroundColor = "lightGrey";
})
console.log(todoList);