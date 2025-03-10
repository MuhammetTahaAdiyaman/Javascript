//! FETCH API

//* Fetch API ile birlikte XMLHttpRequest objesine veda ediyoruz. Bunun nedeni daha zahmetli
//* callback yerine promise
//* ajax(XMLHttpRequest) yerine fetch api kullanacağız.
//? Fetch API: server'a bir http isteği yaparken kullanacağımız windows objesi içinde yer alan bir metot.
//? Fetch API promise ile anlam kazanır çünkü geriye promise döner.

//*basit bir örnek ile yapıyı anlayalım.

// function getStudents(url){
//     const promise = fetch(url);
//     console.log(promise);
// }

// getStudents("students.json");

/*
    Çıktı:
    Promise {<pending}
        [[Prototype]]: Promise
        [[PromiseState]]: "Fulfield"
        [[PromiseResult]]: Response

    *XMLHttpRequest ile istek attığımızda "PromiseResult" direkt bize ilgili değeri veriyordu ancak burada Response dönmüş
    *Bundan dolayı "Response" içinde yer alan json bölümünden ilgil dataya ulaşırız. Ancak biz json metodu kullandığımızda iki kez .then kullanmak zorundayız aşağıda nedenini anlatalım.
*/

function getStudents(url){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

getStudents("students.json");

/*
    Kodu detaylı anlatalım;
    * 1- Biz "getStudents()" ile fetch() ile istek atıyoruz bize bu metot response tipinde promise döndü
    * 2- benim değer ulaşmam için response tipinin içindeki json metodunu kullanmam lazım
    * 3- fetch() bir response döndüğü için ben bunu then ile yakaladım. Bu json() metodu da promise döndüğü için tekrar bunu return yapıp bir sonraki then'e uçurup orada handle ettim datayı
    * 4- bir hata olursa catch metodu ile yakaladım.
    
    !bundan dolayı iki tane .then kullanımı yaptık.

    !şu şekilde de yazım olabilir.
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
*/


//*bir örnek de fake rest api üzerinden yapalım --> jsonplaceholder.typicode.com

function getData(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users");

//bu şekilde verimiz direkt json formatında geliyor önceden xmlhttpreq de biz bir de JSON.parse() yapıyorduk.

//!Not: server olmadığı için gösteremedik ama biz "GET" ile server tarafından veri getirme isteği yaparken "POST" ile de server tarafına veri gönderme isteği yapabiliyoruz.