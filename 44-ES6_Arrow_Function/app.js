//*1-Arrow function öncesinde biz şu şekilde fonk. tanımlardık.
// function yazdir(){
//     console.log("Merhaba");
// }
// yazdir();
//*arrow ile şu şekilde tanımlayacağız.
// const yazdir = () =>{
//     console.log("Merhaba");
// }
// yazdir();

//! NOT: tanımlanan arrow function bir değere atanır ve oradan yürütülür. Dirket şu şekilde arrow func. tanımlayamayız. Çünkü çağırayamayız.
// () => {
//     console.log("Merhaba");
// }


//*2-Eğer arrow function kullanılırken kıvırçık parantez içinde bir tane satırlık işlem varsa parantezi kaldırabiliriz.
//?normal
// const yazdir = () =>{
//     console.log("Merhaba");
// }
// yazdir();
//?kurallı
// const yazdir = () => console.log("Merhaba");
// yazdir();

//*3- Eğer arrow function kullanırken paramtre olarak tek bir parametreye sahipse eğer parantez kaldırabiliriz.
//? normal
// const yazdir = (firstName) =>{
//     console.log("Merhaba"+firstName);
// }
// yazdir();

//? kurallı
// const yazdir = firstName => console.log("Merhaba"+firstName);
// yazdir();

//*4- Eğer arrow function kullanırken parantez içinde sadece tek satırlık return işlemi varsa return değerini silebiliriz.
//? normal
// const kupAl = (x) =>{
//     return x*x*x;
// }

// console.log("Değer: "+kupAl(3));

//? kurallı
// const kupAl = x => x*x*x;
// console.log("Değer: "+kupAl(3));
