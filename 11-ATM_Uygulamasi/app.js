/* 
  *BASİT ATM UYGULAMASI
  -Bakiye Görüntüleme
  -Para Çekme
  -Para Yatırma
  -Çıkış
 */

  //TODO: Switch-Case yapısı kullanarak yapılacaktır.

let bakiye = 10000;
let yeniSatir = "\r\n";
let metin = "1-Bakiye Görüntüleme" + yeniSatir
+ "2-Para Çekme" + yeniSatir 
+ "3-Para Yatırma" + yeniSatir
+ "4-Çıkış" + yeniSatir
+ "Lütfen yapmak istediğiniz işlemi seçiniz: ";

let islem = prompt(metin);

switch(islem){
    case "1":
        alert("Bakiye Görüntüleme Sayfasına Hoşgeldiniz!"+ yeniSatir
            + "Bakiyeniz: " + bakiye 
         );
         break;
    case "2":
        alert("Para Çekme Sayfasına Hoşgeldiniz!");
        let cekilecekTutar = Number(prompt("Lütfen çekmek istediğiniz tutarı giriniz: "));
        if(cekilecekTutar < bakiye){
                bakiye -= cekilecekTutar;
            alert("Çekilecek Tutar: "+ cekilecekTutar + yeniSatir
                + "Kalan Bakiye: " + bakiye
            );
        }
        else{
            alert("Bakiyenizden fazla tutar çekemezsiniz!" + yeniSatir +
                "Çekmek İstenilen Tutar: " + cekilecekTutar + yeniSatir +
                "Bakiye: " + bakiye
            )
        }
        break;
    case "3":
        alert("Para Yatırma Sayfasına Hoşgeldiniz!")
        let yatirilacakTutar = Number(prompt("Lütfen yatırmak istediğiniz tutarı giriniz: "));
        bakiye += yatirilacakTutar;
        alert("İşlem Başarılı!" + yeniSatir + "Güncel Bakiye: "+ bakiye)    
        break;
    case "4":
        alert("Sistemden Çıkış Yapılmıştır!");
        break;
    default:
        alert("Lütfen menude bulunan seçenekler arasından bir seçim yapınız!");
        break;
}