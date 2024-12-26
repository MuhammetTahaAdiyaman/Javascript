/*
    *TYT PUAN HESAPLAMA
*/

let turkceDogru=0, turkceYanlis=0;
let sosyalDogru=0, sosyalYanlis=0;
let matematikDogru=0, matematikYanlis=0;
let fenDogru=0, fenYanlis=0;
let okulPuani=0;
let osymPuan=100;
let tytPuan = 0;

let yeniSatir = "\r\n";

let mesaj = "1-TYT Puan Hesaplama" + yeniSatir 
+"2-Çıkış" + yeniSatir
+"Lütfen yapmak istediğiniz işlemi seçiniz: ";

let secim = prompt(mesaj);

switch(secim){
    case "1":
        okulPuani = Number(prompt("Lütfen okul puanınızı giriniz: "));

        turkceDogru = Number(prompt("Türkçe doğru sayısını giriniz: "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısını belirtiniz: "));

        sosyalDogru = Number(prompt("Sosyal dogru sayısını belirtiniz: "));
        sosyalYanlis = Number(prompt("Sosyal yanlis sayısını belirtiniz: "));

        matematikDogru = Number(prompt("Matematik dogru sayısını belirtiniz: "));
        matematikYanlis = Number(prompt("Matematik yanlis sayısını belirtiniz: "));

        fenDogru = Number(prompt("Fen dogru sayısını belirtiniz: "));
        fenYanlis = Number(prompt("Fen yanlis sayısını belirtiniz: "));

        let totalDogru = turkceDogru+sosyalDogru+matematikDogru+fenDogru;
        let totalYanlis = turkceYanlis + sosyalYanlis + matematikYanlis + fenYanlis;
        let kalanDogruSayisi = totalDogru - (totalYanlis/4);
        tytPuan = (kalanDogruSayisi*4)+osymPuan+okulPuani;
        alert("TYT Puanınız: "+ tytPuan);
        break;
    case "2":
        alert("Başarılı şekilde çıkış işlemi yapılmıştır.");
        break;
    default:
        alert("Lütfen belirtilen seçenekler dışında seçim yapmayınız!");
        break;
}