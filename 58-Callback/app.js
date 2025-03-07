//! CALLBACK

//*şimdi asenkron olmayacak şekilde kodumuzu bir yazalım.

// function getName(){
//     console.log("Taha")
// }

// function getSurname(){
//     console.log("Adıyaman")
// }

// getName();
// getSurname();

/*
    ?yukarıda ki kod senkron bir koddur ve bir bitip diğeri çalışır ve çıktımız;
    -> Taha
    -> Adıyaman
 */

//* şimdi kodumuzu asenkron yapalım. JS de asenkron timing-event-http requestlerinde olur.

// function getName(){
//     setTimeout(() => {
//         console.log("Taha")
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Adıyaman")
//     }, 500);
// }

// getName();
// getSurname();

/*
    ?bu kod çalıştığında ise aynı anda çalıştıkları için surname fonk daha önce geliyor ve çıktı şu şekilde;
    -> Adıyaman
    -> Taha
    ?settimeout kullanmamız bir seneryo gereği; seneryo servisten bilgi gelmesinin zamanını bilmediğimiz için ve belli bir zaman diliminde geldiği için onu yansıtmak için kullanıyoruz.
 */

/*
    !bu durum bir asenkron problemidir. Bunu çözmek için 3 tane alternatif yöntem var;
    !1-Callback
    !2-Promise
    !3-Async & Await

    ?bunlardan ilki olan ve en eski yöntemlerden biri olan "callback" göreceğiz. Pek kullanılması önerilmiyor.
*/

//* biz callback ile şunu yapmak istiyoruz. ilk önce name fonk. daha sonra surname fonk. çalışacağız.
//* bunu da callback ile bu asenkron metodları senkron hale getireceğiz. Dezavantaj önceden ikisi asenkron olduğu için aynı anda çalıştıkları için 1 sn olan süre şimdi 1.5 sn sürecek ancak kod verimliliği açısından iyi olacak.

//! CALLBACK NEDİR ? --> callback; Bir fonksiyonu, bir fonksiyona parametre geçerek asenkron yapıyı senkrona çevirme işlemine yarar.

//*basit bir callback örneği verelim. Önce kodu yazalım daha sonra kodu anlatırız.

// function getName(callback){
//     setTimeout(() => {
//         console.log("Taha")
//         callback();
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Adıyaman")
//     }, 500);
// }

// getName(getSurname);

/*
    ?1- getName(callback) --> getName fonksiyonuna parametre olarak callback isminde bir değişken verdik. Bunun adı a,b,c de olabilir.
    ?2-Daha sonra biz Taha ismini yazdıktan sonra bu değişkenin çalışmasını istedik metot olarak. 
    ?3-getName fonksiyonunu çağırıken de parametre olarak getSurname adını verdik.

    ?yani benim callback = getSurname oldu.
*/


//*Biz Taha Adıyaman şeklinde yan yana da yazdırabiliriz.
// function getName(callback){
//     setTimeout(() => {
//         let name = "Taha"
//         callback(name);
//     }, 1000);
// }

// function getSurname(name){
//     setTimeout(() => {
//         let surname = "Adıyaman"
//         console.log(name,surname);
//     }, 500);
// }

// getName(getSurname);

//? burada da biz callback'e yukarıdan name parametresini gönderdik, aşağıda onu name ile karşıladı.


//* biz parametre olarak bir fonk verdik bunun yerine arrow funck ile de callback oluşturabiliriz.

// function getName(callback){
//     setTimeout(() => {
//         let name = "Taha";
//         callback(name);
//     }, 1000);
// }

// getName((name) => {
//     console.log(name);
// });

/*
    ?artık burada callback = fonksiyonu çağırdığımız yerdeki arrow func. oldu.
    ?arrow func. parametre sebebi ise yukarıdan biz name'i gönderdik aşağıda karşılayabilmek için.
 */


//* callback neden pek fazla tercih edilmez şimdi bunun bir örneğini yapalım.

function getName(callback){
    setTimeout(() => {
        let name = "taha";
        callback(name);
    }, 1000);
}

function getSurname(callback){
    setTimeout(() => {
        let surname = "Adıyaman"
        callback(surname);
    }, 500);
}

function getAge(callback){
    setTimeout(() => {
        let age = 20;
        callback(age);
    }, 250);
}

getName((name)=>{
   getSurname((surname)=>{
        getAge((age)=>{
            console.log(name,surname,age);
        })
    })
})

//! işte özetle callback kullanılmamasının nedeni iç içe yapılar git gite okunması zor ve karmaşıklaşması. Sektörde buna callback hell deniliyor.