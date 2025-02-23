//! SPREAD OPERATÖRÜ
//? eski yöntem

// let numbers = [10,20,30,40];

// const add = (a,b,c,d) => {
//     console.log(a+b+c+d);
// }

// add(numbers[0],numbers[1],numbers[2],numbers[3]);

//? yeni yöntem spread opertatörü ile "..." bunu yapabiliriz.

// let numbers = [10,20,30,40];

// const add = (a,b,c,d) => {
//     console.log(a+b+c+d);
// }

// add(...numbers);

//! ...numbers --> numbers[0],numbers[1],numbers[2],numbers[3] anlamına geliyor.

//? 2 tane diziyi iç içe kullanmak istersek eğer.
//eski
// let diller1 = ["c#","php"];
// let diller2 = ["javascript","python", diller1[0],diller1[1]];

// console.log(diller2);

//yeni
// let diller1 = ["c#","php"];
// let diller2 = ["javascript","python", ...diller1];

// console.log(diller2);


//? bir dizi elemanlarını değişkene atamak için.
// let numbers = [1,2,3,4,5,6,7,8,9];
// let [a,b,...numbersOf] = numbers;
// console.log(a,b,numbersOf);

/*
    a = 1
    b = 2
    c= 3,4,5,6,7,8,9
*/

//? bir diziyi kopyalamak için
//eski
// let arr1 = ["Enes","Ali","Veli","Mehmet"];
// let arr2 = [];

// arr2[0] = arr1[0];
// arr2[1] = arr1[1];
// arr2[2] = arr1[2];
// arr2[3] = arr1[3];

// console.log(arr2);

//yeni
let arr1 = ["Enes","Ali","Veli","Mehmet"];
let arr2 = [];

arr2 = [...arr1];

console.log(arr2);
