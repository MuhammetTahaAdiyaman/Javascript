let metin = "Modern Web Geliştirme Kursu";
let tarih = "2025";

//! CHARAT METODU
//? ilgili indeks verilir ve metinde bulunan indekse de ne varsa o döner.
// let indeks = metin.charAt(2);
// console.log(indeks);

//! CONCAT METODU
//? concat metodu iki string ifadeyi birleştirir.
// let yeni = metin.concat(" "+tarih);
// console.log(yeni);

//! INDEXOF METODU
//? charat metodunun tersi metinde bulunan karakteri verip indis değerini döner
// let indis = metin.indexOf("e");
// console.log(indis)

//! LASTINDEXOF METODU
//? charat metodunun tersi metinde bulunan karakteri verip indis değerini döner.
// let indis = metin.indexOf("e");
// console.log(indis)

//! TOUPPERCASE METODU
//? ilgili metinin tüm karakterlerini büyük harfe dönüştürür.
// let a = metin.toUpperCase();
// console.log(a);

//! TOLOWERCASE METODU
//? ilgili metinin tüm karakterlerini küçük harfe dönüştürür.
// let a = metin.toLowerCase();
// console.log(a);

//! TRIM METODU
//? eğer metnin solunda veya sağında boşluk varsa boşlukları siler.
// let yeni = "    Taha Adıyaman     ";
// let yenim = yeni.trim();
// console.log(yenim);

//! SLICE METODU
//? dilimlemek yani metin içinde bulunan karakter veya kelimeyi çekip alabiliriz. end indis dahil değil şeklinde
// let yeni = metin.slice(0,6);
// console.log(yeni);

//! SUBSTRING METODU
//? bu da slice metodu ile aynı işlevi yapmaktadır. end indisi dahil değil şeklindedir.
// let yeni = metin.substring(0,6);
// console.log(yeni);

//! SPLIT METODU
//? bu metod ise string değerinde bir seperate e göre kelimeleri veya harfleri dizi haline dönüştürür.
// let yeni = metin.split(" ");
// console.log(yeni);

//! VALUEOF METODU
//? ilgili metnin primitive hale dönüştürür ileride anlatılacak.

//! STARTSWİTH METODU
//? ilgili metin verilen değer ile mi başlar sorgular eğer o şekilde ise true değil ise false döner
// let metin2 = metin.startsWith("W");
// console.log(metin2); 

//! ENDSWİTH METODU
//? ilgili metin verilen değer ile mi bitiyor sorgular eğer o şekilde ise true değil ise false döner 
// let metin2 = metin.endsWith("u");
// console.log(metin2);