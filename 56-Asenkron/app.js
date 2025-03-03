//! ASENKRON YAPISINA GİRİŞ

/*
    *Javascript senkron çalışan bir programlama dilidir. Javascript yukarıdan aşağı doğru derlendiği için ilk hangisini görürse onu çalıştırır
*/

console.log(1);
console.log(2);
console.log(3);

/*
    bunun çıktısı;
    1
    2
    3
    oldu çünkü yukarıdan aşağı doğru derleniyor.
*/

/*
    *Javascript bazı durumlarda asenkron çalışır;
    *1-Timing işlemleri (settimeout)
    *2-Event(olay)
    *3-Http istekleri
    *--> en sık kullanılan işlemler bunlar

    !NOT: WebAPI tarafından yönetilen her şey asenkron çalışır.
*/

//*asenkron örneği

console.log(1);

setTimeout(() => {
   console.log("süre doldu") 
}, 1000);

console.log(2);

/*
    burada aslında çıktı olarak şunu bekliyoruz;
    1
    süre doldu
    2
*/

//ancak

/*
    1
    2
    süre doldu

    *Bunun nedeni şu; console.log(2), settimeout() 'un bitmesini beklemedi aynı anda çalıştılar ve asenkron 1sn sonra geldi.

 */

//! NOT: senkron çalışan kodlar, asenkron kodları beklemez.

//*Probleme örnek verelim.

console.log("Enes")

setTimeout(() => {
    console.log(1000)
}, 1000);

setTimeout(() => {
    console.log(250)
}, 250);

setTimeout(() => {
    console.log(500)
}, 500);

console.log("taha");

/*
    Yukarıdaki kodun çıktısı
    enes
    taha
    250
    500
    1000

    *--> yukarıdaki kod da ben enesten sonra 1000 gelmesini istiyorum ama olmuyor bu bir asenkron yönetim problemidir.
*/

//! Gerçek bir senaryo örneği verelim.
//* 1.Fonksiyon = userId bulalım.
//* 2.Fonksiyon = gelen id değerine göre kullanıcının postlarını getirelim
//user id si şu olanın insta postlarını getirmek istiyoruz. user id gelmeden eğer 2.fonk. çalışırsa id gelmeden post nasıl çekcez program patlar.

//! bundan dolayı asenkron programlamayı yönetmeliyiz.
//* bunu da "callback", "promise" ve "async&await" kullanarak asenkron yapıları senkrona çevirip yönetiyoruz.