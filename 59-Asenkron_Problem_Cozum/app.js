//! 57 numaralı klasörde işlenen asenkron probleminin çözümü anlatılacaktır.
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

function getUserId(callback){
    setTimeout(() => {
       //servise gittik ve cevabı aldık 
       let userId = 5;
       callback(userId); 
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

// let userid = getUserId();
// getPostByUserId(userid);

getUserId(getPostByUserId);