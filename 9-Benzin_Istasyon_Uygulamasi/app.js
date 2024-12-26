//* BENZİN İSTASYON UYGULAMASI */
/*
    TODO: Benzin: 44.46 TL
    TODO: Dizel: 45.4 TL
    TODO: LPG: 26.13
*/

let benzin = 44.46;
let dizel = 45.4;
let lpg = 26.13;
let yeniSatir = "\r\n";
let text = "1-Dizel" + yeniSatir + "2-Benzin" + yeniSatir + "3-LPG" +yeniSatir + "Yakıt türünü seçiniz: ";

let yakitTipi = Number(prompt(text));



if(yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3)
{
    let yakitLitre = Number(prompt("Lütfen dolum yapılacak litreyi belirtiniz: "));
    let bakiye = Number(prompt("Lütfen bakiyenizi giriniz: "));
    if(yakitTipi == 1){
        let odenecekTutar = dizel*yakitLitre;
        if(odenecekTutar < bakiye){
            bakiye -= odenecekTutar;
            alert("İşlem başarılı." + yeniSatir + 
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Kalan Bakiye: " + bakiye );
        }
        else{
            alert("Yetersiz bakiye! lütfen farklı bir kart kullanarak ödeme yapın!" + yeniSatir +
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Eksik Bakiye: " + (odenecekTutar-bakiye)   
            );
        }
    }else if(yakitTipi == 2){
        let odenecekTutar = benzin*yakitLitre;
        if(odenecekTutar < bakiye){
            bakiye -= odenecekTutar;
            alert("İşlem başarılı." + yeniSatir + 
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Kalan Bakiye: " + bakiye );
        }
        else{
            alert("Yetersiz bakiye! lütfen farklı bir kart kullanarak ödeme yapın!" + yeniSatir +
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Eksik Bakiye: " + (odenecekTutar-bakiye)   
            );
        }
    }else if(yakitTipi == 3){
        let odenecekTutar = lpg*yakitLitre;
        if(odenecekTutar < bakiye){
            bakiye -= odenecekTutar;
            alert("İşlem başarılı." + yeniSatir + 
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Kalan Bakiye: " + bakiye );
        }
        else{
            alert("Yetersiz bakiye! lütfen farklı bir kart kullanarak ödeme yapın!" + yeniSatir +
                "Alınan Litre: " + yakitLitre +
                "Tutar: " + odenecekTutar + 
                "Eksik Bakiye: " + (odenecekTutar-bakiye)   
            );
        }
    }
}
else
{
    alert("Lütfen geçerli bir yakit tipi seçiniz");
}