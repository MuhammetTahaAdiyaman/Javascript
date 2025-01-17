/*
    *Faktöriyel aslında verilen sayının birer düşürerek kendisi ile çarpılmasıdır.
    * 3! = 3.2.1 = 6 gibi
*/

let sayi = Number(prompt("Lütfen faktöriyelini bulmak istediğiniz sayıyı giriniz: "));
let sonuc = 1;
for(let i = sayi; i>=1; i--){
    if(sayi == 0){
        sonuc = 1;
    }else{
        sonuc = sonuc*i;
    }
    
}

alert("Sonuc: " + sonuc);

