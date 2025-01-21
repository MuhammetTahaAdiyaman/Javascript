//*Dizilerde sıklıkla kullandığımız metotları inceleyeceğiz.

let arabalar = ["Bmw","Mercedes","Renault","Toyota","Porsche"]

//! PUSH METODU
//*--> push metodu; dizinin sonuna eleman ekler ve return olarak dizinin uzunluğunu döner. Orijinal diziyi etkiler.
// console.log(arabalar);
//?hyundai ekleyelim.
// arabalar.push("Hyundai");
// console.log(arabalar);
//?return olayına bakalım.
// let diziUzunluk = arabalar.push("Hyundai");
// console.log(diziUzunluk)

//! UNSHIFT METODU
//*--> unshift metodu; dizinin başına eleman ekler ve return olarak dizinin uzunluğunu döner. Orijinal diziyi etkiler.
// console.log(arabalar);
//?hyundai ekleyelim
// arabalar.unshift("Hyundai");
// console.log(arabalar);
//?return olayına bakalım.
// let diziUzunluk = arabalar.unshift("Hyundai");
// console.log(diziUzunluk);

//! POP METODU
//*--> pop metodu; dizinin sonundan eleman siler. return olarak silinen elemanı döner. Orijinal diziyi etkiler.
// console.log(arabalar);
//?Porsche silelim.
// arabalar.pop();
// console.log(arabalar);
//?return'e bakalım.
// let silinenEleman = arabalar.pop();
// console.log(silinenEleman);

//! SHIFT METODU
//*--> shift metodu; dizinin başındaki elemanı siler ve return olarak silinen elemanı döner. Orijinal diziyi etkiler.
// console.log(arabalar);
//?Bmw'yi silelim.
// arabalar.shift();
// console.log(arabalar);
//?return'e bakalım
// let silinenEleman = arabalar.shift();
// console.log(silinenEleman);

//! SPLICE METODU
//*--> splice metodu hem eleman eklemek hem de eleman silmek için kullanılır. Orijinal diziyi etkiler.
console.log(arabalar);
//?eleman eklemek için kullanalım.
//anlamı şu; başlangıç indeksi 2.indek, sıfır eleman sil, ve hyundai ekle
// arabalar.splice(2,0,"Hyundai")  
// console.log(arabalar);

//?eleman silmek için kullanalım.
//bunun anlamı şu 1.indeksten başla ve 2 eleman sil 1.ve2.indis elemanlarını sil
// arabalar.splice(1,2);
// console.log(arabalar);

//?eleman silelim ve silinen eleman yerine bir şey ekleyelim. Toyota gitsin citroen gelsin.
//3.indeksten başla 1 eleman sil ve yerine citroen ekle
// arabalar.splice(3,1,"Citroen");
// console.log(arabalar);

//! TOSTRING METODU
//*--> tostring metodu; elimizdeki diziyi return olarak string hale dönüştürür.
// console.log(arabalar);
// let stringDizi = arabalar.toString();
// console.log(stringDizi);

//! JOIN METODU
//*--> join metodu; elimizdeki diziyi return olarak string hale dönüştürür. fark şu araya seperatör yani ayraç ekleyebiliriz.
// console.log(arabalar);
// let stringDizi = arabalar.join("-");
// console.log(stringDizi);

//! CONCAT METODU
//*--> concat metodu; iki diziyi birleştirir ve return olarak döner.
// let arabalar2 = ["Citroen","Tofaş"];
// let birlesikDizi = arabalar.concat(arabalar2);
// console.log(birlesikDizi);

//! SLICE METODU
//*--> slice metodu; start indis değeri verip o değerden sonra ayırıp ayrı dizi haline return eder.
// console.log(arabalar);
// let yeniDizi = arabalar.slice(2);
// console.log(yeniDizi);
//?end değeri de verebiliriz şu ile şu aralıktaki elemanları seç ve yeni dizi olarak return et anlamında
// let yeniDizi = arabalar.slice(1,4);
// console.log(yeniDizi);

//! LENGTH ÖZELLİĞİ
//*--> length özelliği dizinin uzunluğunu verir.
// console.log(arabalar.length);

//! REVERSE METODU
//*--> reverse metodu; diziyi tersine çevirir. orijinal diziyi etkiler.
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

//! SPLIT METODU
//*--> split metodu; string olan verileri arraya dönüştürürek return döner.
// let isimler = "Emre,Taha,Osman";
// let isimlerDizi = isimler.split(",");
// console.log(isimlerDizi);

//! INDEXOF METODU
//*--> indexof metodu; dizi içinde verilen değer varsa 0 yoksa -1 olarak return döndürür.
// console.log(arabalar);
//?ilgili değer varsa
// let index = arabalar.indexOf("Bmw");
// console.log(index);
//?ilgili değer yoksa
// let index = arabalar.indexOf("Ferrari");
// console.log(index);
//?bu durumu if şartı ile yönetebiliriz.
// let index = arabalar.indexOf("Ferrari");
// console.log(index);
// if(index == -1){
//     console.log("ilgili eleman yoktur")
// }else{
//     console.log("ilgili eleman vardır")
// }

//! INCLUDES METODU
//*-->includes metodu; verilen değer ilgili dizi içinde varsa true yoksa false olarak return döner;
console.log(arabalar)
//?ilgili değer varsa
// let sonuc = arabalar.includes("Bmw");
// console.log(sonuc);
//? ilgili değer yoksa
// let sonuc = arabalar.includes("Ferrari");
// console.log(sonuc);