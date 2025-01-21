let urun1 = {
    isim:"Iphone_16_Pro",
    kategori: "Telefon",
    fiyat: 85000
}

let urun2 = {
    isim:"Iphone 16 Pro Max",
    kategori: "Telefon",
    fiyat: 125000
}

let urun3 = {
    isim:"Apple Macbook Pro",
    kategori: "Notebook",
    fiyat: 75000
}

let urun4 = {
    isim:"Apple Macbook Air",
    kategori: "Notebook",
    fiyat: 55000
}

let urun5 = {
    isim:"Apple Airpods",
    kategori: "Kulaklık",
    fiyat: 8500
}

let urun6 = {
    isim:"Apple Ipad",
    kategori: "Tablet",
    fiyat: 25000
}

let search = prompt("Lütfen aramak istediğiniz ürünü giriniz: ");

//normalde bu urunler gerçek bir projede db tarafından çekilir
let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let filtreliUrunler = [];

function searchProduct(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(search.toUpperCase(), 0)){
            filtreliUrunler.push(urun);
        }
    });
}

searchProduct(urunler);

function listProducts(urunler){
    urunler.forEach(function(urun){
        console.log("------------------------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("------------------------------------------------------");
    });
}

listProducts(filtreliUrunler);