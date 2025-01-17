//*1'den 10 kadar 1er artacak şekilde döngü yazalım

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

//*10'a kadar çift sayıları yazdılarım

// for(let i=0; i<=10; i+=2){
//     console.log(i);
// }

//*10'a kadar tek sayıları yazdıralım

// for(let i=1; i<=10; i+=2){
//     console.log(i);
// }

//*Çift sayılarda taha tek sayılarda naber yazsın

// for(let i=0; i<=10; i++){
//     if(i%2==0){
//         console.log("taha")
//     }
//     else{
//         console.log("naber")
//     }
// }

//*50'den 1'e kadar sayıları yazdır ve sonunda toplamı buldur.

let toplam=0;
for(let i=50; i>=1; i--){
    toplam+=i;
    console.log(i);
}
console.log("Toplam: "+toplam);