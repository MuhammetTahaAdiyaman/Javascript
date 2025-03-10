//! ASYNC & AWAİT
//* bizi promise-then zincirinden kurtaran yapı
//* callback hell gibi ileride then zinciri olacak
//* async await ile daha temiz daha anlaşılabilir ve sonucunda da yönetilebilir bir kod yazıyoruz.

// function hello(){
//     return "HELLO WORLD"
// }

// console.log(hello());

//* yukarıdaki fonk. bize bir string döner
//* eğer biz metodun başına async ifadesini koyarsak bu metod bize "promise" dönecek.

// async function hello(){
//     return "Hello World"
// }

// console.log(hello())

/*
    Promise{<fulfield> 'Hello World}
        [[Prototype]]: Promise
        [[PromiseState]]: "Fullfield"
        [[PromiseResult]]: "Hello World"
*/

//* değere ulaşmak için

// hello()
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err))

/*
    !Bir seneryo üzerinden anlatalım.
    *Bana post ve postların yorumları lazım. Mesela post id = 1 olanın hem postu hem de bu posta ait yorumları getirmek istiyorum.
    *benim 2 tane istek atmam gerek
    ?1-post id = 1 olanın postunu getir
    ?2-daha sonra buradan almış olduğum idyi post idye parametre olarak geçir ve bu posta ait yorumları getir

    *biz bu seneryoyu bir promise, bir de async await ile yapalım ki farkı görelim
*/

//promise

document.querySelector("#button").addEventListener("click", ()=>{
    fetch("https://jsonplaceholde.typicode.com/posts/1")
    .then((response)=>response.json())
    .then((post)=>{
        console.log(post);
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json())
        .then((comment)=>console.log(comment))
    })
})

//*görüldüğü üzere içeride bir çok .then zinciri oldu ve okunması güçleşiyor.

// async & await

document.querySelector("#button").addEventListener("click", async ()=>{
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await postResponse.json();

    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
    const comment = await commentResponse.json();

    console.log(comment);
})

//*await: await kullanılan yerdeki işlem bitmeden diğerine geçme, kullanılan yerdeki işlem tamamlansın daha sonra bir sonraki satıra geçebilirsin demektir.
//* bir yerde "await" kullanacaksak öncelikle kullanılan yerin metodunun başına "async" takısı eklemek zorundayız
//* bir yerde promise dönüyorsa o yerde asenkronik yönetim problemi olacacktır ve bekletmek zorunda olduğumuz için await kullanmalıyız

/*
    await taha
    gül

    taha çalışmasını bitirmeden gül çalışamaz. Önce taha çalışmasını bitirsin
*/

//*yukarıdaki async & await kodunu daha da kısaltabiliriz.


document.querySelector("#button").addEventListener("click", async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comment =await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(comment);
})


//* niye bekletiyoruz. örneğin biz hem post'a hem de comments'e asenkron olduğu için http istekleri aynı anda istek atacak ve eğer comments daha hızlı çalışırsa post id gelmeden comments gelemez ve bize null dönecek
//* bundan dolayı biz aslında diyoruz ki önce post id gelsin daha sonra biz onun idsini commente gönderelim ve düzgün şekilde veriler gelsin. Buna genel olarak asenkronik problem deniyor işte bunu çözmek için güncel olarak fetch api ve async&await kullanıyoruz.