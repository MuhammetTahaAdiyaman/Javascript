//TODO: Çıktı verme metodları 3 tanedir. Bunlar "console.log(), document.write(), alert()"
//*document.write() --> sayfaya bir çıktı alabilmek için kullanılır. Pek fazla tercih edilmez.
// document.write("Muhammet Taha Adıyaman </br>");
// document.write("Hello World </br>");
// document.write(27);


//*console.log() --> sayfamızın console tarafına çıktılar almak için kullanırız.
// console.log("Muhammet Taha ADIYAMAN");
// console.log(55);
// let a = 5;
// let b = 6;
// console.log(a+b);
// console.log("iki sayının toplamı: ", a+b);

// console.clear(); //--> console'u temizlemek için kullanırız.

//TODO: En dış obje = window, onun içinde = document var.
//console.log(window);


//*alert() (Uyarı) popup ile çıktı verebilmek.
//alert uyarı anlamına gelmektedir kullanıcıyı popup ile bilgilendirmek için kullanırız.
// let a = 10;
// let b = 15;
// alert("iki sayının toplamı: "+(a+b));

//TODO: Bir şey window objesinin içindeyse direkt çağırabiliriz. windows.localstorage yazmak yerine localstorage.-- şeklinde yazabiliriz.
//TODO: document objesine erişim sağlarken belirtmek zorundayız document.createByElement() gibi. Sebebi document objesi windows objesinin içinde yer alan bir objedir.
console.log(window);
console.error("Hata Oluştu");
console.warn("Bilgi var");