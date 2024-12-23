/*
    TODO: Değişkenlerde scope kavramı
*/

/* 
    --------------- SCOPE (KAPSAM) -------------------
    --> Global Scope
    --> Function Scope
    --> Block Scope
*/

//* Global Scope: En geniş kapsamdır ve her yerden erişim sağlanabilir.

// var a = 5;

// if(true){
//     console.log(a);
// }

// function method1(){
//     console.log(a);
// }

//TODO: Değişken global scope olması için herhangi bir kıvırcık parantez içinde yer almaması gerekir.


//* Function Scope: Kıvırcık parantez içinde tanımlanan değişkene yalnızca orada erişim sağlanır. Parantez dışında erişim sağlanamaz.

// function method2(){
//     var b = 12;
//     console.log(b);
// }
// console.log(b); //dışarısında erişim sağlayamıyoruz.
// method2();

//* Block Scope: Kıvırcık parantez içinde bir kıvırcık parantez daha açılıp değişken orada tanımlanırsa block scope olur.

// function method3(){
//     var d = "Taha";
//     if(true){
//         var c=13;
//         console.log(c);
//         console.log(d);
//     }
// }

// method3();

//!----------------------------

//* Değişken Türleri
//javascriptte diğer yazılım dillerinde olduğu gibi tip belirtmemize gerek yok sadece 3 tane değişken türü var; 
// var , let ve const.

/*
    * var: var ile tanımladığımız değer function scope şeklinde çalışır. Yani diyelim ki ben block scope içinde var ile değişke
    * tanımladım ben scope dışından yani function scope dan erişebilirim.
*/

// function selamVer(){
//     var selam = "Herkese selam";
//     if(true){
//         var b = 10;
//     }
//     console.log(b);
//     console.log(selam);
// }

// selamVer();

//TODO: Eğer var değişkenini globalde tanımlarsak global scope, function içinde tanımlarsak function scope, block scope içinde tanımlarsak function scope olur.
//TODO: var kullanımının dezavantajı ram bellekte çok fazla yer kaplar.


/*
    *let/const: block scope özelliğine sahiptir yani kullanıldığı parantez içinden erişim sağlanır onun dışında sağlanamaz.
*/

// function selamVer(){
//     var selam = "Herkese selam";
//     if(true){
//         let b = 10;
//         const c = 5;
//     }
//     console.log(b) //--> erişemeyiz hata alıyoruz.
//     console.log(c)
// }

//TODO: var ile aynı değişkenden iki tane oluşturabilirken const ve let ile oluşturamayız.

// var a = 10;
// var a = 5;
// console.log(a);

// if(true){
//     let b= 5;
//     let b = 6; //--> direkt kızıyor
// }

//TODO: let ve const arasındaki fark ise const sabittir verilen değer sonradan değiştirelemez ancak objede bir istisna var bahsedeceğim.
// const a = 10;
// a =  15;
// console.log(a);

//TODO: objede istisna ise hemen bir obje yapalım.
// const user = {
//     username : "taha",
//     password : "123"
// }

// user = {}

// console.log(user); //--> değeri olan bir objeyi boşaltamayız.

//Todo: ancak değeri olan bir objenin kendisini değil içinde bulundurduğu değeri şu şekilde değiştirebiliriz.
const user = {
    username : "taha",
    password : "123"
}

user.username = "tadiyaman"

console.log(user);