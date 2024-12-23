//TODO: if ve else koşul yapılarında eğer şart true ise if'e girer ve kod else uğramadan devam eder.
//TODO: eğer koşul false ise if'e girmez else'e girer ve kod alttan devam eder.
//TODO: ya if çalışır ya else yani ikisinden biri çalışır, ikisi aynı anda çalışmaz.

//*Exampl1

// let not = 55;

// if(not > 45){
//     console.log("Geçtiniz, notunuz: "+ not);
// }
// else{
//     console.log("Kaldınız, notunuz: "+not);
// }


//*Exampl2
//TODO: kullanıcıdan aldığımız değerler string olduğu için bir koşula bağlamamız için tür dönüşümü yapmamız gerek.

// let yas = Number(prompt("Yasiniz: "));
// let para = Number(prompt("Bütçeniz: "));

// if(yas > 18 && para >= 3000){
//     alert("Ehliyet sınavına katılabilirsiniz");
// }
// else{
//     alert("Ehliyet sınavına katılamazsnız");
// }

//*Exampl3
//TODO: Ders ortalaması bulma; vize1 %30, vize2 %30, final %40

let vize1 = Number(prompt("Lutfen 1.vize notunuzu giriniz"));
let vize2 = Number(prompt("Lutfen 2.vize notunuzu giriniz"));
let final = Number(prompt("Lutfen final notunuzu giriniz"));
let ortalama = (vize1*0.3)+(vize2*0.3)+(final*0.4);

if(ortalama >= 50){
    alert("Dersten geçtiniz tebrikler :) --> " + ortalama);
    console.log("Dersten geçtiniz tebrikler");
}
else{
    alert("Dersten kaldınız, geçmiş olsun :( --> " + ortalama);
    console.log("Dersten kaldınız geçmiş olsun")
}

