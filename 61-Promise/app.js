//! PROMISE
/*
    ? -> callbacklerin alternatifi olarak kullanılan bir yapıdır
    ? -> callback yerine promise kullanarak async yapıları senkrona çevirerek senkron problemi olmasını engelleyerek yöneteğiz.

    ! -> Promise yapısında 3 tane durum var;
    ! 1- Pending (bekleme, işlemeye devam ediyorum)
    ! 2- Fulfield - resolve (işlem başarılı)
    ! 3- rejected (reddedildi)
    ! bunu bir seneryo üzerinden anlatalım.

    * Bir yazıcı işlemi üzerinden anlatalım;
    * Yazıcıya kağıt çıktısı işlemi için isteği attığımızda zaten bekleme modundayız. Kağıt çıkarma işlemi bitene kadar bu işleme pending denir.
    * eğer kağıt başarılı şekilde çıktı alırsak resolve, eğer herhangi bir sebepten mesela kartuj bitti gibi başarısız olursa kağıt elimize çıktı olarak verilmezse rejected olarak dönecek
    * biz bu başarılı veya başarısız durumu yönetebilmemiz bazı fonks. ihtiyacımız var. Eğer başarılı ise ".then", başarısız olursa ".catch" fonk. kullanırız.

*/

//* hemen basit bir örnek ile promise yapısını anlayalım.

// let check = true;
// const promise = new Promise((resolve,reject)=>{
//     if(check){
//         resolve("işlem başarılı")
//     }
//     else{
//         reject("işlem başarısız")
//     }
// });

// console.log(promise);

/*
    ? Promise kullanmak için Promise classından bir nesne yaratmamız gerek.
    ? Nesne yaratırken const. biz başarılı ve başarısız şeklinde parametre geçip duruma göre bunu dönmemiz gerek.

    *Yukarıdaki kod şu çıktıyı verir.
    Promise{<fulfield>:'işlem başarılı'}
        [[Prototype]]: promise
        [[PromiseState]]: "fulfield"
        [[PromiseResult]]: "işlem başarılı"

    !-> Biz bunu tetikledik yani daha resolve'lu promise veya rejetli promise oluşturduk ancak bunu daha kullanmadık
    !-> biz bu promise'i handle (yakalayıp) duruma göre ".then() veya ".catch()" ile yönetelim. 
*/

// let check = true;
// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promise Başarılı!");
//         }
//         else{
//             reject("Promise Başarısız")
//         }
//     });
// }

// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

/*
    *Şimdi bu kodu anlatalım.
    *1- ilk önce check değişkeni tanımladık bu bizim durum kontrolünü sağlayacak.
    *2- bir tane "createPromis" adında bize promise yaratacak bir fonk. oluşturuyoruz. Bu fonk. bir tane promise dönecek. Biz promise sınıfı yaratırken başarılı ve başarısız temsil edecek parametreler atıyoruz.
    *3- aşağıda biz bu "createPromise" fonk. çağırdık. Burada bize resolve veya reject olarak dönüyor. biz eğer resolve ise .then ile, reject ise .catch ile yakalıyoruz.
    *4- resolve döndüğü için .then'e girer ve burada da arrow func çalışır. Burada response parametresi geçmemizin nedeni yukarıda resolve("") içinde yazılan değişkeni aşağıda bu parametre ile yakalayabilmemiz için. Aynısı .catch içinde geçerli.
*/

//! bizim bir de finally adında bir fonk. var. Promise resolve olsada reject olsa da her zaman çalışır.
// .finally(()=>{
//     console.log("Her zaman çalışır.");
// })

//* Promise yapısı bu kadar.
//* Peki neden kullanılır ? asenkronik olan problemleri yönetmek için kullanılır. Asenkronik yapıyı senkrona çevirir. Callback ile aynı anlamda çalışır. Zaten callback alternatifidir.

//! Şimdi asenkronik içeren bir örnek yapalım.
//* Seneryo: XMLHttpRequest ile server tarafından post, users gibi dataları getir. 
//* Zaten JS de timing-event-http request asenkron çalıyordu.

/*
    try-catch mantığı
    try{
        *eğer kod hata almazsa try çalışır catch çalışmaz.
    }catch(error){
        !herhangi bir hata alırsa try çalışmaz, catch çalışır ve hata mesajını error ile yakalar.
    }
*/

//* biz server olarak ilk önce kendi oluşturduğumuz json dosyasını yapalım daha sonra fake rest api kullanacağız.

// function readStudents(url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState === 4 && xhr.status === 200){
//                    resolve(JSON.parse(xhr.responseText));  
//                 }
//             });
//         } catch (error) {
//             reject(error);
//         }

//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudents("students.json")
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })

/*
    !Yukarıdaki kodu anlatalım.
    *1-öğrencileri çekeceğimiz için readStudents adında bir metot oluşturduk ve çağıracağımız url'i parametre olarak verdik.
    *2-daha sonra bu metodumuzu çağırdık ve "students.json" dosyamızı buna verdik.
    *3-bu metot bize bir promise dönecek. Resolve veya reject şeklinde.
    *4-daha sonra server'a ulaşmamız için XMLHttpRequest nesnesi oluşturduk. Bu nesneyi try catch ile yöneteceğiz. Başarılı ise try başarısız ise catch girecek.
    *5-daha sonra bu requesti "get metodu ile ve ilgili url" isteği açıp göndereceğimizi belirttik.
    *6-daha sonra bu metottan dönecen promise 'i başarılı ise .then ile başarısız ise .catch ile yakalayp yönettik. Yukarıdaki değerleri de response ve error ile yakalayıp çektik.
*/

//* Şimdi ise fake rest api ile bir örnek yapalım. --> "jsonplaceholder.typicode.com" sitesini kullanacağız.

// function getUsers(url){
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange",()=>{
//             try{
//                 if(xhr.readyState === 4 && xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             }catch(error){
//                 reject(error);
//             }
//         });

//         xhr.open("GET",url);
//         xhr.send();
//     });
// }

// getUsers("https://jsonplaceholder.typicode.com/users")
// .then((response)=>console.log(response))
// .catch((error)=>console.log(error))
// .finally(()=>{
//     //mail atma kodlarını yazabiliriz.
// })

//! Not: Biz .then içinde ilgili verileri yazdıktan sonra farklı asenkron kodlarını yazabiliriz. Postları, mesajları yorumları getir gibi.

//*Userların sadece name'lerini de getirebiliriz.

// getUsers("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     response.forEach((user)=>{
//         console.log(user.name);
//     });
//     //daha sonra farklı asenkronik kodları çalıştırmak için kullanabiliriz.
// })
// .catch((error)=>console.log(error))
// .finally(()=>{
//     //mail atma kodlarını yazabiliriz.
// })

//* yukarıdan ilgili data response'ye json.parse şeklinde yani array şeklinde geldiği için direkt foreach ile dönebiliriz.


//* bir de şöyle bir örnek yapalım. İlgili kullanıcıyı yukarıda çektik bu kullanıcının idsine göre yapılan yorumları da getirelim.
//* yani bir yerden gelen veriyi başka bir yere ata ve oradan gelen sonucu getir gibi bir şey yapalım.

function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try{
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            }catch(error){
                reject(error);
            }
        });

        xhr.open("GET",url);
        xhr.send();
    });
}

function getComments(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try{
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }
            }catch(error){
                reject(error);
            }
        });

        xhr.open("GET",url);
        xhr.send();
    });
}

getUsers("https://jsonplaceholder.typicode.com/Users/3")
.then((response)=>{
    console.log(response);
    return getComments(`https:jsonplaceholder.typicode.com/comments/${response.id}`)
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    //mail kodlarını yazabiliriz.
})

//* return ile tekrar getComments() metotunu dönmemizin nedeni dışarıya alıp daha sonra dışarıdan .then ile içeriden döndürülen değeri yakalayıp ekrana basabilmek.


//! Promise.All() --> birden fazla promise yapısını yönetmek için kullanılır. Kural eğer hepsi başarılı ise resolve eğer bir tanesi başarısız bile olsa reject döner.

const promise1 = Promise.resolve("başarı 1");
const promise2 = Promise.resolve("başarı 2");
const promise3 = Promise.resolve("başarı 3");

Promise.all([promise1,promise2,promise3])
.then((response)=>console.log(response))
.catch((error)=>console.log(error))

