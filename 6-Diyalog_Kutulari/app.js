/*
    *--------Diyalog Kutuları----------
    *1-)Alert
    *2-)Prompt
    *3-)Confirm  
*/

//TODO: yukarıda bulunan 3 tane method da windows nesnesi içinde yer alan fonksiyonlardır. Hemen nereden geldiğini inceleyelim.
// console.log(window);

//TODO: window objesi en geniş yani en dış obje olduğundan dolayı methodların başına window.prompt() şeklinde yazmaya gerek yok.

//* Alert() Metodu
/*
    Kullanım amacı kullanıcıyı bilgilendirmek veya yapılan işlemi kısıtlamak için kullanırız.
*/

// alert("işleminize devam etmeden önce kaydetmelisiniz!");


//*Prompt() Metodu
/*
    Kullanım amacı kullanıcıdan değer almak için kullanırız.
    -Kullanıcıdan girilen değeri geri döndürür.
    -Eğer girilen değeri saklamak istersek bir değişkene atarız.
    -Girilen değer ne olursa olsun geriye "string" döner
    -Kullanıcıdan iki tane number girdim bunları toplama yaptırmam için önce tür dönüşümünü yapmam gerekiyor
*/

// let isim = prompt("Lütfen isminizi giriniz: ");
// let yas = prompt("Lütfen yasinizi giriniz: ");

// console.log("İsminiz: "+isim);
// console.log("Yaşınız: "+yas);

// console.log(typeof isim);
// console.log(typeof yas);

//*Confirm() Metodu
/*
    Kullanım amacı kullanıcıya evet yada hayır seçimini yaptırmak için kullanılır. Kısaca true yada false işlemleri için kullanılır.
    Eğer kullanıcı diyalog üzerinde "Tamam" butonuna basarsa --> true, "İptal" butonuna basarsa --> false döner
*/

// let sonuc = confirm("Silmek istediğinize emin misiniz?");
// console.log(sonuc);
