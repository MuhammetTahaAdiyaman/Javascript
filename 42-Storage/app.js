//! STORAGE KULLANIMI

//Storage = tarayıcının depolama alanına denir.

//? Tarayıcıda 2 tane storage bulunur. Local storage ve Session storage.
//? Session storage = tarayıcıyı kapatıp açtığında depolanan veriler silinir
//? Local storage = tarayıcıyı açıp kapatsak bile depolanan veriler silinmez

//*window objesinin içinde bulunur her ikside.
console.log(window);

//*her iki storage a eklenen değerler string olarak kabul edilir ve string olarak dönülür.
//*key,value şeklinde çalışmaktadır.

//! Session Storage

//*Değer ekleme

// sessionStorage.setItem("102","Taha");
// sessionStorage.setItem("103","Ahmet");
// sessionStorage.setItem("104","Lale");
// sessionStorage.setItem("105","Simge");
// sessionStorage.setItem("106","Emine");

//? f12 den application bölümünden storage bölümüne bak.

//*Değer silme

// sessionStorage.removeItem("102");

//*Değer getirme --> return olarak string döner. değer yok ise null döner

// let value = sessionStorage.getItem("105");

// if(value == null){
//     console.log("Değer bulunamadı");
// }else{
//     console.log("Değer: "+value);
// }

//*Tüm değerleri temizleme

// sessionStorage.clear();

//*Session storage'a array de atayabiliriz ve array de çekmek isteyebiliriz bunun için "JSON" dan yararlanırız.

// let names = ["ahmet","taha","ismail"];

// sessionStorage.setItem("names",names); //--> string olarak atar.
// sessionStorage.setItem("names",JSON.stringify(names)); //--> ARRAY gibi atar.

//yine array gibi çekmek istersek.

// let value = JSON.parse(sessionStorage.getItem("names"));

// console.log(value);

// value.array.forEach(function(name){
//     console.log(name);
// });

//! Local storage

//? NOT: aynı methodları local storage üzerinde de kullanabiliriz.
//? eleman eklemek için = localStorage.setItem(key,value);
//? eleman silmek için = localStorage.removeItem(key);
//? eleman getirmek için = localStorage.getItem(key);
//? hepsini temizlemek içn = localStorage.clear();