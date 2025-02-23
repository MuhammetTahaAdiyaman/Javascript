//! SET KULLANIMI
//* set kullanımı da map de olduğu gibi dizinin alternatifidir.
//* set farkı; setlerin içine konulan değerden yalnızca bir tane tutabiliyoruz.
//* key, value şeklinde değil direkt value olarak değer ataması gerçekleştirilir.

//? Oluşturma

let set = new Set();

//? Değer atama

set.add("taha");
set.add(4.12);
set.add(1);
set.add(true);
set.add([1,2,3]);
set.add({firstName: "Taha", lastName: "adiyaman"});

//?Boyutunu öğrenme

console.log(set.size);

//? Değer silme

set.delete("taha");
console.log(set.size);

//? Değer olup olmadığını sorgulama

console.log(set.has("taha"));

//! NOT: referans tipleri (dizi ve nesne) bir değişkene atanıp oradan map veya set'e eklemek gerek. Yoksa silme vb. işlemler yapamayız. Bellek adresinin aynı olması için değişkende tutmalıyız.

//? Döngü ile dönebiliriz.

for(let value of set){
    console.log(value);
}

//? Seti arraya döndürüp foreach ile de dönebiliriz.

const arr = Array.from(set);
arr.forEach((value)=>{
    console.log(value);
})

//? not: map de bulunan diğer işlemler burada da geçerli mantıken hep aynı.