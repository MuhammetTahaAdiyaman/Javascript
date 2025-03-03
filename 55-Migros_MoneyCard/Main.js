const mesaj = 
`
Migrosa Hoşgeldiniz
Migros Money Card var mi?
1-Evet
2-Hayır
`;

const urunler = 
[
    {
        fiyat: 35,
        urun: "Süt"
    },
    {
        fiyat: 20,
        urun: "Dido"
    },
    {
        fiyat: 200,
        urun: "Köfte"
    }
]

let sonuc = confirm(mesaj);

if(sonuc){
    let isim = prompt("Lütfen adınızı giriniz: ");
    let soyisim = prompt("Lütfen soyadınızı giriniz: ");
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    let odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri: ${musteri.ad} ${musteri.soyad}
        Ödenecekt Tutar: ${odenecekTutar}
        `
    )
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`)
}
