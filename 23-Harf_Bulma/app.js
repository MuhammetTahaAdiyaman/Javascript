//*Metin içinde kullanıcıdan alınan harf kaç tane var bunu öğrenme uygulaması yapacağız.

let metin = "Merhaba ben Taha, İstanbulda doğdum ancak şu anda Konyada ikamet etmekteyiz. Yazılım geliştiriciyim"
let harf = prompt("Bulmak istediğiniz harfi giriniz: ");
function bul(harf){
    let toplam = 0;
    for(let i=0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
            toplam += 1;
        }
    }
    return toplam;
}

let sonuc = bul(harf);
alert(harf+" harfi toplam "+ sonuc+" kere kullanılmıştır.");