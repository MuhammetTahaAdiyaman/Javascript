/*
    *HAFTANIN GÜNLERİNİ SWİTCH CASE İLE MODELLEMEK
*/

let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
+ "2-Salı" + yeniSatir
+ "3-Çarşamba" + yeniSatir
+ "4-Perşembe" + yeniSatir
+ "5-Cuma" + yeniSatir
+ "6-Cumartesi" + yeniSatir
+ "7-Pazar" + yeniSatir
+ "Lütfen bir seçim yapınız: ";

let secim = prompt(metin);

switch(secim){
    case "1": 
        alert("Pazartesi");
        break;
    case "2":
        alert("Salı");
        break;
    case "3":
        alert("Çarşamba");
        break;
    case "4":
        alert("Perşembe");
        break;
    case "5":
        alert("Cuma");
        break;
    case "6":
        alert("Cumartesi");
        break;
    case "7":
        alert("Pazar");
        break;
    default:
        alert("Lütfen belirtilen aralıkta bir seçim yapınız!");
        break;                
}
