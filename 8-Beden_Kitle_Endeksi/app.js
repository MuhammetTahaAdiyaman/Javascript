//* BEDEN KİTLE ENDEKSİ UYGULAMASI */

let kilo = Number(prompt("Lütfen kilo değerinizi giriniz: "));
let boy = Number(prompt("Lütfen boy değerinizi giriniz: "));

let sonuc = kilo/(boy*boy);

if(sonuc < 18.5){
    alert("İdeal kilonun çok altında: " + sonuc);
}else if(sonuc >= 18.5 && sonuc <= 24.9){
    alert("İdeal kilonun altında: " + sonuc)
}else if(sonuc >= 25 && sonuc <= 29.9){
    alert("İdeal kiloda: " + sonuc);
}else if(sonuc >= 30 && sonuc <= 39.9){
    alert("İdeal kilonun üzerinde(obez): " + sonuc);
}else if(sonuc >= 40){
    alert("İdeal kilonun çok üstünde(morbid obez): " + sonuc);
}