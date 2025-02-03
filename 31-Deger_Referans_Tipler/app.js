//Değer ve Referans Tipler
//! Değer Tipler
/*
    !string
    !number
    !boolean
    !undefined
    !null
    !symbol
*/

//! Referans Tipler
/*
    !Object
    !Array
    !Function
*/

//? Not: Biz bir değişkeni tanımladığımız zaman eğer tanımlanan değişen "Değer" tipli ise
//? ram bellekte "Stack" adı verilen bölümde; eğer "Referans" tipli ise "Heap" adı verilen bölümde tutulur.

//! Değer Tip
// let a = 5;
// let b = a;

// console.log("a: "+a);
// console.log("b: "+b);

// console.log("---------")

// b = 10;

// console.log("a: "+a);
// console.log("b: "+b);

//?Not: Yani ben burada a'nın değerini b'ye atadığım zaman sadece değer atıyoruz
//? bunun harici bir ilişki yok. B de olan değişiklikler a değişkenini etkilemez.

//! Referans Tip

// let a = [1,2,3];
// let b = [1,2,3];
// if(a == b){
//     console.log("Eşit")
// }else{
//     console.log("Eşit Değil")
// }

//?sonuç: eşit değil peki neden ? değerleri aynı
//? Biz şunu dedik eğer referans tip ise "Heap" de tutulur.
//? Bunların eşit olmamasının nedeni dizi1 ve dizi2 ram bellekte ayrı adreslerde tutuluyor.

//şimdi adresleri eşitleyelim bakalım kanıtlayalım durumu
let a = [1,2,3];
let b = a;
if(a == b){
    console.log("Eşit")
}else{
    console.log("Eşit Değil")
}
//?sonuç: eşit. artık ikiside örnek olarak 402 nolu adreste tutuluyor. Ve birbirlerini etkileyecekler. Örneğin;
//b dizisine 12 ekleyelim bakalım a dizisinde de değişiklik olacak mı?
b.push(12);

console.log(a);
console.log(b);

//görüldüğü üzere ikisinde de 12 eklenmiş çünkü ikiside aynı adresi tutuyor.

//! NOT: Değer tipte eşitlik değerler üzerinden sorgulanırken. Referans tipte eşitlik adres üzerinden sorgulanır.