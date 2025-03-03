class MigrosBase{
    indirimOrani = 20;
    constructor(ad, soyad, kartVarMi,urunler){
        this.ad = ad;
        this.soyad = soyad;
        this.kartVarMi = kartVarMi;
        this.urunler = urunler;
    }

    hesapla(){
       let toplamFiyat = 0;
       if(this.urunKontrol(this.urunler)){
            if(this.kartVarMi){
                this.urunler.forEach((urun) => {
                    toplamFiyat += (urun.fiyat * (100-this.indirimOrani) / 100);
                })
            }else{
                this.urunler.forEach((urun) => {
                    toplamFiyat += urun.fiyat;
                }) 
            }
       }else{
         alert("Lütfen sepete en az 1 ürün ekleyiniz.");
       }

       return toplamFiyat;
    }

    urunKontrol(urunler){
        if(urunler != null && urunler.length > 0){
            return true
        }
        return false;
    }
}