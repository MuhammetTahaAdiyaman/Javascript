//! OOP - OBJECT ORIENTED PROGRAMMING
//* OOP aslında gerçek hayatı, programlamaya entegre etmek için kullandığımız bir yapıdır.
//* Nesneler üzerinden hareket edilir.

//! Nesne oluşturma ve Yapıcı Metot (Constructor) kullanma
//?insan üzerinden bir örnek oluşturarak mantığı anlamaya çalışalım.

// class Insan{
//     /*
//         Nesneler;
//         1-) Props - Özellik
//         2-) Constructor - Yapıcı Metot
//         3-) Function - Metot
//         bu 3 yapı üzerine kurulur.
//     */
//    constructor(){
//     console.log("Yapıcı metot oluşturuldu");
//    }
// }

// let insan1 = new Insan();

//? Yukarıdaki kodumuzda şunlar ifade edilmektedir.
//* new Insan() --> önce Insan nesnesine gider ve constructor varsa onu çalıştırır daha sonra gelir bunu insan1 değişkenine atar.
//* NOT: biz new Insan() dediğimiz anda ram bellekte bir alan oluşur ve insan1 değişkeni onu tutar. Aslında Insan sınıfını tutuyor diyebiliriz.

//*****************************/

/*
    ? Constructor = nesne oluşturulurken - new Insan() dediğimiz anda - çalışan metotdur. 
    ? parametre alabilir.
    ? ileri konular ancak nedenini bahsedelim; encapsulation yani kapsülleme dediğimiz dışarıdan erişime kapalı olan yapılarda kullandığımız yöntemdir bir değer atamak için set ve get metotları kullanırız. İşte constructor sayesinde bu metotlara uğramadan değer atamasını gerçekleştirebiliriz.

    ?constructor da bulunan parametreleri nesnenin propertyleri ile atama yaparken "this" anahtar kullanılır. this.ad bu nesnenin propu.
*/

class Insan{

    constructor(isim,soyisim,yas,maas){
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster(){
        console.log(
            `
                İsim: ${this.isim}
                Soyisim: ${this.soyisim}
                Yaş: ${this.yas}
                Maaş: ${this.maas}
            `
        )
    }
}

let insan1 = new Insan("Taha","ADIYAMAN",26,10000);
let insan2 = new Insan("Fikret","Bey",33,21000);

insan1.bilgileriGoster();
insan2.bilgileriGoster();

//NOT: ileri konu ancak şunu belirtmeliyim ki burada hem nesnenin prop hem de metotu public yani erişime açık olduğu için böyle erişiyoruz.
//NOT: private olsaydı getter ve setter metotları denilen metotlar üzerinden bu proplara erişim sağlayacaktık.