//*Mukemmel sayi; sayinin bölenleri toplamı kendisinin 2 katına eşitse bu mükemmel sayıdır.
//6 --> 1,2,3,6 = 12 = 6*2
//28 --> 1,2,4,7,14,28 = 56 = 28*2

//benim kod
// let sayi = Number(prompt("Lütfen bir sayi giriniz: "));

// function Mukemmel(sayi){
//     let toplam = 0;
//     for(let i=1; i<= sayi; i++){
//         if(sayi%i==0){
//             toplam += i;
//         }
//     }

//     return toplam;
// }

// let sonuc = Mukemmel(sayi);

// if(sonuc == (sayi*2)){
//     alert(sayi + " sayisi mükemmel sayidir.")
// }else{
//     alert(sayi +" mükemmel sayi değildir.")
// }


//hocanın kod
//mantık şu bir sayı kendisinin yarısına kadar tam bölünür onun harici kendisi ve 1'e tam bölünür mantığı ile hareket edeceğiz.

let sayi = Number(prompt("Lütfen bir sayi giriniz: "));
function IsPerfectNumber(number){
    let toplam = 0;
    for(let i=2; i<=sayi/2; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam == number*2){
        alert(number + " mükemmel sayidir!");
    }else{
        alert(number + " mükemmel sayi değildir.")
    }

}

IsPerfectNumber(sayi);