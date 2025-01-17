/*
    *Mantığı oturtalım.
    *Bir sayının asal olup olmadığını bulmak için kendisinin yarısına kadar olan 2 den başlayıp deneriz.
    *Eğer yarısına kadar bir tane bölenden kalan 0 ise asal değil eğer 1 ve kendisine bölünüyorsa asaldır.
*/


let sayi = Number(prompt("Lütfen bir sayi giriniz: "));
let sonuc = true;
for(let i=2; i<=Math.floor(sayi/2); i++){
    if(sayi%i==0){
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(sayi+" sayisi asaldir!");
}else{
    alert(sayi+" sayisi asal değildir!");
}