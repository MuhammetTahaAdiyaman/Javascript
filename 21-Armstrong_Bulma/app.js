/*
    armstrong sayısı bir sayının her bir rakamının küpünün toplamı kendisini veriyorsa bu armstrong sayısıdır.
    153 sayısı bir armstrong sayısıdr.
*/

let sayi = prompt("Lütfen bir sayi giriniz: ");
//girilen sayıyı number olarak almadık string metotlarından faydalanabilmek için.
let toplam = 0;

for(let i=0; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}

if(Number(sayi) == toplam){
    alert(sayi+" sayisi armstrong sayisidir.");
}else{
    alert(sayi+" sayisi armstrong sayisi değildir.");
}