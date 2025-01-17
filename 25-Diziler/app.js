//*Diziler: aynı veya farklı türde olan birden fazla değeri bir arada tutmaya yarayan yapıdır.

//!dizi tanımlayalım ve elemanlarına erişelim. index 0'dan başlar
// let isimler = ["ayşe","fatma","hayriye"];
// console.log(isimler[2]);

// let takimlar = ["Fenerbahçe","Galatasaray","Beşiktaş","Konyaspor"]
//!mesela ben konyaspor yerine trabzonspor yapmak istiyorum.
// takimlar[3] = "Trabzonspor";
// console.log(takimlar[3]);
//!son elemanı saymak yerine şu şekilde de erişebilirdik.
// takimlar[takimlar.length-1] = "Trabzonspor";

//!diğer programlama dillerinde dizinin eleman sayısı 3 ve sen 5.elemana erişmek istersen "ArrayIndexOutOfBoundException" ile karşılaşırdık ancak burada "undefined" oluyor
// console.log(takimlar[5]); 

//!karışık şekilde de dizi tanımlayabiliriz.
// let karisik = [1,undefined,null,"taha",'a',5.6,true];


//!Dizilerin veri tipi objecttir.
// let dizi = [1,2,3,4];
// console.log(typeof dizi);

//!Dizileri biz foreach döngüsü ile dönmemiz gerekiyor daha kolay olması için ancak diğer döngüleri de kullanabiliriz.

let isimler = ["taha","batuhan","cemal","semih","alperen"]
//ilk önce for ile dönelim
// for(let i=0; i<isimler.length; i++){
//     console.log(isimler[i]);
// }

//while ile dönelim
// let sayac = 0;
// while(sayac < isimler.length){
//     console.log(isimler[sayac]);
//     sayac++;
// }

//şimdi ise önerilen foreach ile dönelim.
//!NOT: foreach bizden bir callback fonk. ister. Callback her bir dizi elemanı için çağrılan fonksiyona denir.
isimler.forEach(function(isim){
    console.log(isim);
})

