//! DESTRUCTİNG KULLANIMI
//? önceden dizideki elemanları bir değişkene atamak isteseydekiş şu şekilde yapmamız gerekiyordu;

// let langs = ["C#","C++","Javascript","Python"];

// let lang1 = langs[0];
// let lang2 = langs[1];
// let lang3 = langs[2];
// let lang4 = langs[3];

// console.log(lang1,lang2,lang3,lang4);

//?destructing ile beraber şu şekilde indis belirtmeden yapabiliriz.

// let langs = ["C#","C++","Javascript","Python"];

// let [lang1,lang2,lang3,lang4] = langs

// console.log(lang1,lang2,lang3,lang4);

//* burada langs dizisini sırasıyla solda bulunanlara ata anlamına gelir.

//?Method içinde kullanımını görelim.

// const hesapla = (a,b) => {
//     const topla = a+b;
//     const cikar = a-b;
//     const carp = a*b;
//     const bol = a/b;

//     const tumIslemler = [topla,cikar,carp,bol];
//     return tumIslemler; 
// }
// //methodumuz dizi dönüyor
// let [toplamSonuc, cikarmaSonuc, carpmaSonuc, bolmeSonuc] = hesapla(10,2);
// console.log(toplamSonuc,cikarmaSonuc,carpmaSonuc,bolmeSonuc);


//?Nesne içinde eski kullanım yapalım. Yani nesne değerlerini bir değişkene önceden nasıl atıyorduk.

// const user = {
//     firstName : "Taha",
//     lastName : "Adiyaman",
//     age: 27,
//     salary : 5000
// }

// let isim = user.firstName;
// let soyIsim = user.lastName;
// let yas = user.age;
// let maas = user.salary;

// console.log(isim,soyIsim,yas,maas);

//! destructing ile birlikte bunu şu şekilde alırız. Burada önemli not nesne içindeki değişken ismi ile dışarıdaki değişken isim aynı olmalı ki maplensin aksi taktirde verileri çekemeyiz undefined gelir.

// const user = {
//     firstName : "Taha",
//     lastName : "Adiyaman",
//     age: 27,
//     salary : 5000
// }

// let {firstName,lastName,age,salary} = user;

// console.log(firstName,lastName,age,salary);

//* peki ben değişken isimlerini farklı olmasını istersem.

const user = {
    firstName : "Taha",
    lastName : "Adiyaman",
    age: 27,
    salary : 5000
}

let {firstName:isim,lastName:soyisim,age:yas,salary:maas} = user;

console.log(isim,soyisim,yas,maas);

