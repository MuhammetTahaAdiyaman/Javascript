/*
    *-> ilk önce problemi görelim ve ilerleyen derslerde bu probleme çözümlerini öğreneceğiz.
    ?"jsonplaceholder.com" ile fake rest service kullanabiliriz. İstek atılacak ve örnek datalar gelecek şekilde.
    *->settimeout() simüle etmek için kullandık. Gerçek hayatta rest service yaparken kullanmayacağız.
    *->bir service'e istek atarken veya service tarafından cevap gelirken 1, 2 sn gecikme olabilir bundan dolayı biz settimeout ile bunu simüle ettik. Gerçek projede kullanılmaz. istek veya cevap süreleri tahmin edilemez.
*/

const users = [
    {
        userId:5,
        post: "Taha post 1"
    },
    {
        userId: 5,
        post: "Taha post 2"
    },
    {
        userId:5,
        post: "Taha post 3"
    },
    {
        userId:6,
        post: "Ahmet post 1"
    },
    {
        userId:7,
        post: "Onur post 1"
    }

]

function getUserId(){
    setTimeout(() => {
       //servise gittik ve cevabı aldık 
       return 5 
    }, 1000);
}

function getPostByUserId(userId){
    //burada gerçek projede rest apiye istek atiyoruz
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId === userId){
                console.log(user.post)
            }
        })
    }, 500);
}

let userid = getUserId();
getPostByUserId(userid);

/*
    *Bizim burada yapmak istediğimiz şey şu aslında
    *1-getUserId() metodu ile servise istek attık kullanıcının idsini almak için ve bize 1 sn sonra 5 olarak döndü
    *2-getPostByUserId() ile ilgili kullanıcının id değerine sahip postları 0.5 sn sonra getirmesi
*/

/*
    Ekranda normalde ne görmemiz gerek
    -Taha post 1
    -Taha post 2
    -Taha post 3

    ancak hiç bir veri gelmedi. Bunun nedeni ? 
    !Yukarıda da bahsetmiş olduğumuz asenkron yönetimi problemi.
    *Çünkü iki fonksiyon asenkron çalıştığı için 0.5 olan getPostByUserId() erken çalıştı, getUserId() geç kaldı bunun sonucunda id=undefined geldi ve post gelmedi.
    *Şunu demeliyiz önce getUserId() çalışsın sonra getPostByUserId() çalışsın.
    *işte bunu da "Asenkronu senkrona çevirerek" çözmemiz gerek. Bu çevirme işlemini de "callback","promise" ve "async&await" biri ile çözeriz hepsini tek tek göreceğiz.
*/