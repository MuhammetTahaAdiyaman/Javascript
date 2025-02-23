//! FOR IN VE FOR OF KULLANIMI

//? biz önceden bir diziyi dönmek istersek eğer forEach döngüsü kullanırdık.

// let names = ["Taha","Hasan","Ismail","Necmi"];

// names.forEach((name)=>{
//     console.log(name);
// })

//? ancak şimdi hem for in hem de for of kullanabiliriz.

//* For in = dizideki indis numaralarını verir.

// let names = ["Taha","Hasan","Ismail","Necmi"];

// for(let name in names){
//     console.log(name);
// }

//ancak biz indis üzerinden de dizideki bulunduğu indisdeki değerine de erişim sağlayabiliriz.

// for(let name in names){
//     console.log(name, names[name]);
// }

//* For of = dizideki değeri direkt verir.

// let names = ["Taha","Hasan","Ismail","Necmi"];

// for(let name of names){
//     console.log(name);
// }

//ancak biz değer üzerinden de dizideki değerin indis numarasına da erişebiliriz.

// for(let name in names){
//     console.log(name, names.indexOf(name));
// }
