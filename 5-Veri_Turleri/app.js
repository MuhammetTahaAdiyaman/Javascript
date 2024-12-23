//? Veri Tipleri
/*
    Primitive
    *1-String
    *2-Number
    *3-Boolean
    *4-Null
    *5-Undefined
    *6-Object
    *7-Function
 */

//!--------------STRİNG VERİ TİPİ--------------    
/*
    TODO: String veri türleri genellikle harf kullanmamız gereken yerlerde kullanırız. Sayıları da string şekilde kullanabiliriz.
*/

// let isim = "Taha 26 yaşındadır";
// console.log(isim);
// console.log("türü:"+typeof isim);


//!--------------NUMBER VERİ TİPİ--------------    
/*
    TODO: Number veri türleri genellikle sayısal veriler kullanmamız gereken yerlerde kullanırız. Tam sayı, ondalıklı sayı ayrımı yoktur.
*/

// let sayi1 = 5.3;
// let sayi2 = 7.7;
// console.log(sayi1+sayi2);

//todo: Number veri türlerinde + operatörü iki sayının toplamasını sağlarken; Number + String veya String + String veri türlerinde yan yana gelmesini sağlar.

// let sayi1 = "2";
// let sayi2 = "5";
// console.log(sayi1+sayi2);

// let isim = "Taha";
// let yas = 26;
// console.log(isim + yas);


//!--------------BOOLEAN VERİ TİPİ--------------    
/*
    TODO: Boolean veri türleri genellikle true ya da false kullanmamız gereken yerlerde kullanırız. 
*/

// console.log(18>5);
// console.log(5>18);

// let a= 5;
// let b= 12;
// let sonuc = a+b;
// console.log(sonuc != 15);

//!--------------NULL VERİ TİPİ--------------    
/*
    TODO: Null veri türleri genellikle değişkende başlangıç değeri atamasında null yapmak için kullanırız.
*/

// let isim = null;

// isim = "taha";

// console.log(isim);

//!--------------UNDEFİNED VERİ TİPİ--------------    
/*
    TODO: Undefined veri türleri genellikle değişkende başlangıç değeri verilmemesinde oluşur.
*/

// let yas;
// console.log(typeof yas);

//!--------------OBJECT VERİ TİPİ--------------    
/*
    TODO: Object veri türleri genellikle birden fazla aynı veya farklı değişken türündeki verileri toplamaya yarar.
    TODO: Object türü: Objeler ve arraylar olarak belirtebiliriz.
*/

// let insan = {
//     isim : "Taha",
//     soyisim : "Adiyaman",
//     yas: 26
// }

// console.log(insan);
// console.log(typeof insan);

// let sehirler = ["İstanbul","Ankara","İzmir"];
// console.log(sehirler);
// console.log(typeof sehirler);

//!--------------FUNCTİON VERİ TİPİ--------------   
/*
    TODO: Function veri türleri genellikle fonksiyon yazılacak zamanlarda kullanırız.
*/

let func = function(){
    console.log("Merhaba");
}

func();

console.log(typeof func);