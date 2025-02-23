//! MAP KULLANIMI
//* Mapler dizilerin alternatifidir.
//* key,value şeklinde değer ataması gerçekleştirilir.

//? Oluşturma

let map1 = new Map();

//? Değer atama (key,value)

map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");

//? Değer getirme (key)

// console.log(map1.get(34));

//? Değerin boyutunu öğrenme

// console.log(map1.size);

//? Değeri silme

// map1.delete(34);
// console.log(map1.size);

//? Map içinde ilgili değer var mı? sorusunu sorma 

// console.log(map1.has(35));

//? Bir map üzerinde for ile dönme

// for(let [key,value] of map1){
//     console.log(key,value);
// }

//!NOT: Aslında for içinde biz "[key,value]" derken destructing yaptık.

// for(let value of map1){
//     console.log(value);
// }

//bu döngü bize aslında şu sonucu veriyor.
/*
    [34,"İstanbul"]
    [35, "İzmir"]
    [6,"Ankara"]
    [1,"Adana"]
*/

//normalde biz destructing de ne yapıyorduk.

// let arr = [34,"İstanbul"];
// let [a,b] = arr;

//bunun anlamı şu;
//let a = arr[0]
//let b = arr[1]

//* bu şekilde olduğu için biz map de for of içinde destructing kullandık.

//? Farklı şekilde de dönebiliriz.
//* keys() --> map'in key değerlerini verir.
//foreach ile dönmek için array'e döndür.

// const keys = Array.from(map1.keys());
//*keylere ulaşabiliriz.
// keys.forEach((key)=>{
//     console.log(key)
// })
//*keyler üzerinden değerlere de ulaşabiliriz.
// keys.forEach((key)=>{
//     console.log(key, map1.get(key))
// })

//****************/

//* values() --> map'in value değerlerini getirir.

// for(let value of map1.values()){
//     console.log(value);
// }


//? Map'ten arraya çevirmek.

// const arr = Array.from(map1);

// console.log(arr);

//burada da yapı array içinde array oluyor
/*
    const arr = [
        [34,"İstanbul"],
        [35,"İzmir"],
        [6,"Ankara"],
        [1,"Adana"]
    ]
*/

// arr.forEach((value) => {
//     console.log(value[0]); //--> 0.indis keyi verir, 1.indis value verir
// })

// arr.forEach((value)=>{
//     console.log(value[1]);
// })


//? Arrayi Map'e çevirmek.

// const arr = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [6,"Ankara"],
//     [1,"Adana"]
// ]

// let myMap = new Map(arr);
// console.log(myMap);


//? NOT: Değer (int,string etc) ve referans tiplerde (nesne,dizi) map ile değer getirirken dikkat.
//normalde şu şekilde getirdiğimizde problem yok.

// let myMap2 = new Map();
// myMap2.set(34,"İstanbul");
// console.log(myMap2.get(34));

//direkt istanbul buluruz ama biz key tarafına dizi veya nesne verdiğimizde ne oluyor bakalım.

// let myMap2 = new Map();
// myMap2.set([1,2,3,4],"İstanbul");
// console.log(myMap2.get([1,2,3,4]));

//bunun sonucunda istanbul gelmesini beklerken "undefined" geldi.
//sebebi adres farklı yani benim key olan dizi ile sonraki dizimin adresi farklı iki tane [1,2,3,4] oluşturuyor gibi düşün.
//buna çözüm için değişkene atayıp onun üzerinden getirebiliriz.

let dizi = [1,2,3,4]
let myMap2 = new Map();
myMap2.set(dizi,"İstanbul");
console.log(myMap2.get(dizi));

//şimdi hem key hem de çağırdığımız değer aynı değişken adresini tuttuğu için istanbul değerini getirdik.
//bu durum obje içinde geçerlidir.