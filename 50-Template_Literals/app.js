//! TEMPLATE LİTERALS

//template literals öncesi string işlemlerini "+" ile birleştirirdik.

function write(ad,soyad){
    console.log("Ad:" + ad + " " + "Soyad: "+ soyad);
}

//ancak template literalsden sonra bu daha da kolay hale geldi.

function write2(ad,soyad){
    console.log(`Ad: ${ad} Soyad: ${soyad}`);
}

write("Taha","ADIYAMAN");
write2("Taha","ADIYAMAN");