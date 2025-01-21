//öncelikle kitaplarımızı nesne olarak tanımlayalım.
let kitap1 = {
    ad: "Nutuk",
    yazar: "Mustafa Kemal Atatürk",
    fiyat: 45,
    raf:"RAF1.5"
}

let kitap2 = {
    ad: "insan Neyle Yaşar?",
    yazar: "Tolstoy",
    fiyat: 92,
    raf:"RAF3.4"
}

let kitap3 = {
    ad: "Leylanın Evi",
    yazar: "Zülfü Livaneli",
    fiyat: 82,
    raf:"RAF4.5"
}

let kitap4 = {
    ad: "Huzursuzluk",
    yazar: "Zülfü Livaneli",
    fiyat: 81,
    raf:"RAF3.3"
}

let kitap5 = {
    ad: "Safahat",
    yazar: "Ömer Seyfettin",
    fiyat: 75,
    raf:"RAF2.3"
}

let kitaplar = [kitap1,kitap2,kitap3,kitap4,kitap5];

let raf1_1 = {
    kod : "RAF1.1",
    goster : false
}
let raf1_2 = {
    kod : "RAF1.2",
    goster : false
}
let raf1_3 = {
    kod : "RAF1.3",
    goster : false
}
let raf1_4 = {
    kod : "RAF1.4",
    goster : false
}
let raf1_5 = {
    kod : "RAF1.5",
    goster : false
}

let raf2_1 = {
    kod : "RAF2.1",
    goster : false
}
let raf2_2 = {
    kod : "RAF2.2",
    goster : false
}
let raf2_3 = {
    kod : "RAF2.3",
    goster : false
}
let raf2_4 = {
    kod : "RAF2.4",
    goster : false
}
let raf2_5 = {
    kod : "RAF2.5",
    goster : false
}

let raf3_1 = {
    kod : "RAF3.1",
    goster : false
}
let raf3_2 = {
    kod : "RAF3.2",
    goster : false
}
let raf3_3 = {
    kod : "RAF3.3",
    goster : false
}
let raf3_4 = {
    kod : "RAF3.4",
    goster : false
}
let raf3_5 = {
    kod : "RAF3.5",
    goster : false
}

let raf4_1 = {
    kod : "RAF4.1",
    goster : false
}
let raf4_2 = {
    kod : "RAF4.2",
    goster : false
}
let raf4_3 = {
    kod : "RAF4.3",
    goster : false
}
let raf4_4 = {
    kod : "RAF4.4",
    goster : false
}
let raf4_5 = {
    kod : "RAF4.5",
    goster : false
}

let raf5_1 = {
    kod : "RAF5.1",
    goster : false
}
let raf5_2 = {
    kod : "RAF5.2",
    goster : false
}
let raf5_3 = {
    kod : "RAF5.3",
    goster : false
}
let raf5_4 = {
    kod : "RAF5.4",
    goster : false
}
let raf5_5 = {
    kod : "RAF5.5",
    goster : false
}

let raflar = [
    [raf5_1,raf5_2,raf5_3,raf5_4,raf5_5],
    [raf4_1,raf4_2,raf4_3,raf4_4,raf4_5],
    [raf3_1,raf3_2,raf3_3,raf3_4,raf3_5],
    [raf2_1,raf2_2,raf2_3,raf2_4,raf2_5],
    [raf1_1,raf1_2,raf1_3,raf1_4,raf1_5]
];

function rafOlustur(){
    console.clear();
    let satir = "";
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<5; j++ ){
            satir+="|" + (raflar[i][j].goster ? raflar[i][j].kod : "---");
        }
        console.log(satir);
        console.log("------------------------")
        satir="";
    }
}

//rafın kodunu bulabilmemiz için kitabın ismi ile şartı kontrol etmemiz gerekiyor.

function rafKodBul(kitapIsmi){
    let rafKod = null;
    kitaplar.forEach(function(kitap){
        if(kitap.ad.toUpperCase().includes(kitapIsmi.toUpperCase(),0)){
            rafKod = kitap.raf;
        }
    })
    return rafKod;
}

//rafı bulduktan sonra artık bunu rafta gösterebilmemiz için goster == true olması lazım.

function rafGoster(rafKod){
    for(let i=0; i<raflar.length; i++){
        for(let j=0; j<5; j++){
            if(raflar[i][j].kod == rafKod){
                raflar[i][j].goster = true;
                return;
            }
        }
    }
}

rafOlustur();

let kitapAra = prompt("Lütfen bir kitap ismi giriniz: ");
let rafKodu = rafKodBul(kitapAra);


if(rafKodu != null){
    rafGoster(rafKodu);
    //biz rafları önceden oluşturduğumuz için rafın bulunduğu kısmı true yapmıyor bundan dolayı tekrar rafOlustur() metodunu çağırmamız gerek
    rafOlustur();
}else{
    console.log(kitapAra+" adında bir kitap stokta mevcut değildir.");
}