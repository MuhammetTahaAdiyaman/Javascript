//! STATIC ANAHTAR KULLANIMI
/*
    *bizler bazı değişkenleri veya metotları static olarak tanımladığımız zaman classtan nesne üretmeden direkt class ismi üzerinden tanımlanan static değerlere erişebiliriz.
    *biz static olmadan sınıf içinde olan metot veya özelliklere erişmek için sınıftan nesne üreterek erişmemiz gerekiyordu.
*/

//* Static kullanılmadan 

// class Matematik{
//     topla(a,b){
//         console.log(a+b);    
//     }
//     cikar(a,b){
//         console.log(a-b);
//     }
//     carp(a,b){
//         console.log(a*b);
//     }
//     bol(a,b){
//         console.log(a/b);
//     }
// }

// const matematik1 = new Matematik();
// matematik1.topla(10,23);

//? Görüldüğü üzere biz topla metoduna erişmek için "new Matematik()" şeklinde bir nesne oluşturduk ve nesne üzerinden eriştik.

//! NOT: constructor oluşturmadık gibi dursada kod arka planda boş bir constructor oluşturuluyor.

//**************/

//* Static kullanılarak

// class Matematik{
//     static topla(a.b){
//         console.log(a+b);
//     }

//     cikar(a,b){
//         console.log(a-b);
//     }
//     carp(a,b){
//         console.log(a*b);
//     }
//     bol(a,b){
//         console.log(a/b);
//     }
// }

// Matematik.topla(10,2);

// *Gördüğümüz gibi biz static ile oluştuduğumuz metota, sınıf üzerinden nesne oluşturarak değil direkt sınıf üzerinden erişmiş olduk


/*
    !Peki static nerelerde kullanılır?
    * Eğer bir metot veya özellik static ise class'a özgüdür.
    * Eğer static değilse, class'tan üretilen nesneye özgüdür.
    
    ? Sınıf üzerinden nesne üretmek maliyetli bir iş ve her nesne üretildiğinda ram bellekte yer kaplıyor ve üretilen nesneleri bir süre sonra yönetmek zor hale geliyor.
    *Buna bir örnek verelim; bir kayıt sayfası düşün ve kullanıcı adını yazarken boş mu değil mi diye bir kontrol sağlayan metot olduğunu düşün. biz bunu kodlarken Utility adında class oluştulur ve metotlar veya özellikler static olarak oluşturulur ve bu şekilde yönetiriz.
    *"StringUtil" adında bir sınıf içinde "static isNull()" metotu oluştuduğumuz düşünün.
    * StringUtil.isNull(gelenDeger) olarak kullanacaktık. Eğer static olmasaydı sürekli sürekli nesne üretmek zorunda kalacaktık.

*/

//? static prop. üzerine de örnek verelim.

class Insan{
    static lang = 10;

    constructor(ad,soyad,maas){
        this.ad = ad;
        this.soyad = soyad;
        this.maas = maas;
    }

    writeInfo(){
        console.log(this.ad, this.soyad, lang)
    }

}

//*nesne üreterek bir bakalım.
const insan1 = new Insan("Taha","Adıyaman");
insan1.writeInfo();

//*görüldüğü üzere bizim lang = undefined olarak geldi bunun nedeni biz static olarak tanımladık. Yani static olan değere nesne üzerinden değil sınıf üzerinden erişmemiz gerek.

console.log(Insan.lang);