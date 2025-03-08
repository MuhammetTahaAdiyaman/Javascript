//! AJAX & XMLHttpRequest

//? AJAX = Asynchronous Javascript And XML
//? AJAX bir programlama dili değildir.
//? AJAX server'a bir istek atıp, cevap ile veri almak için kullandığımız bir yapıdır. Bir diğer deyişle tarayıcı ile server'ı birbirine bağlayan köprüdür.
//? XMLHttpRequest sınıfından türeterek kullanırız.

//*bu sınıftan türettiğimiz için bazı anlamlar vardır bunlar önemlidir.
/*
                200: Başarılı
    ?Status ->  403: Bulunamadı
                404: Sayfa yok
                500: Sunucu tarafında hata

                    0: request yani istek atılmadı
                    1: server bağlantısı kuruldu (server ayağa kalktı)
    ?readyState ->  2: istek ulaştı
                    3: istek işleniyor
                    4: istek işlendi ve bitti, cevap hazır


    ?responseText -> cevabı almak için bu event kullanılır.

    ?onReadyStateChange -> readyState değiştiğinde işlemler yaptırmak için kullanırız.

    "GET" -> veriyi almak
    "POST" -> veriyi göndermek

    !NOT: Bu yöntem eski bir yöntemdir. Bundan dolayı pek tercih edilmez. Bunun yerine FETCH API vs. kullanılır. Yeninin mantığını anlayabilmek için eskiyi bilmemiz gerek.

*/

//* Server olarak fake rest api kullanacağız. jsonplaceholder.typicode.com adresini.
//* bu bir rest apidir. yani web servistir. Http protokolü üzerinden istek atılır ve rest servisinden cevap gelir.
//*bunu yapmak için de AJAX kullanacağız.

//* url id de olabilir olmayadabilir bundan dolayı url kontrolü sağlayan bir kod yazalım. Bu url'i yukarıda belirtilen sitenin isteği şeklinde yapıyoruz.

function prepareURL(url, id){
    if(id === null){
        return url;
    }

    return `${url}?postId=${id}`;
}

//* isteğimizi oluşturacağımız fonk. yazalım.

// function getComments(url,id){
//     let newURL = prepareURL(url,id);
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", ()=>{
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log(JSON.parse(xhr.responseText))
//         }
//     });

//     xhr.open("GET", newURL);
//     xhr.send();


// }

// getComments("https://jsonplaceholder.typicode.com/comments",null);

//*genel bir fonk. yazalım ve ne verirsek o çalışsın.

function getData(url){
   const xhr = new XMLHttpRequest();
   xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(JSON.parse(xhr.responseText));
        }
   });

   xhr.open("GET",url);
   xhr.send();
}

getData("http://jsonplaceholder.typicode.com/posts");