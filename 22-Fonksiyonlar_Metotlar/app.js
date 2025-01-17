/*

*Fonksiyonlar: Bir kod bloğunu parçalayarak yönetmek için ve tekrar tekrar kullanım sağlamak içindir. Clean kod için olmazsa olmazdır.
*Bir kere yaz paketle ve dilediğin yerde tekrar tekrar çağır şeklinde kullanabiliriz.

*/

/*
    !Tanım: function fonksiyonIsmi(){
    
        !Kodlar

    !}
*/
//*Parametresiz Fonksiyonlar 
//*-->Geriye değer döndürmeyen ve parametre almayan fonksiyonlardır. 
// function isimYazdir(){
//     console.log("Taha");
// }

// isimYazdir();


// function topla(){
//     console.log(13+5);
// }

// topla();

//*Parametreli Fonksiyonlar
//*-->Geriye bir değer döndüren ve parametre alan fonksiyonlardır.
//*-->Fonksiyon tek bir şeye odaklı değil verilen değere odaklı şekilde çalışır.
// function isimYazdir(isim,soyisim){
//     console.log(isim + " " +soyisim);
// }

// isimYazdir("Taha","Adiyaman");

//!küp bulan fonksiyon yazalım.
// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }

// cube(3);

//!ehliyet kontrolü sağlayan bir fonksiyon yazalım.
// let yas = Number(prompt("Lutfen yasinizi giriniz"));
// function yasKontrol(age){
//     if(age >= 18){
//         console.log("Ehliyet alabilir!")
//     }else{
//         console.log("Ehliyet alamaz. Yaş 18 veya 18'den büyük olmalıdır!");
//     }
// }

// yasKontrol(yas);


//*Return ile değer döndüren metotlar
//şimdi bu fonksiyonda ben değeri dışarıda kullanmak istiyorum.
// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     console.log(sonuc);
// }

//ben içeride bulunan sonucu dışarıda kullanamam çünkü fonk. içinde erişim sağlarım sadece.
//bundan dolayı ben dışarıda kullanabilmem için o değeri dönmem gerekiyor return ile

// function cube(sayi){
//     let sonuc = sayi*sayi*sayi;
//     return sonuc;
// }

// let donenDeger = cube(2);
// console.log(donenDeger);

//!NOT: Değer nereye dönüyor; fonksiyonun çağırıldığı yere döndürür return ile.
//!NOT: Geriye değer döndürmeyen metotlara void denir.
//!NOT: Metot içinde metot kullanabiliriz.
function kareAl(sayi){
    let sonuc = sayi*sayi;
    return sonuc;
}

function Cube(sayi){
    let karesi = kareAl(sayi);
    let sonuc = sayi*sayi*sayi;
    console.log("Karesi: "+karesi);
    return sonuc;
}

let kup = Cube(2);
console.log("Küpü: "+kup);

