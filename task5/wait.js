const posts =[

    {
        title: 'Post one',
        body: 'this is post 1',
        createdAt : Math.floor(new Date().getTime()/1000),
    },
    {
        title: 'Post two',
        body: 'this is post 2',
        createdAt : Math.floor(new Date()/ 1000),
    }
];
var intervalId = 0;
function getPosts(){
    clearInterval(intervalId);

    setInterval(() =>{
        let output = '';
        posts.forEach((post,index) => {
                output += `<li>${post.title} - created ${Math.floor(new Date().getTime()/1000) - post.createdAt} sec ago</li>`;
        });
        document.body.innerHTML = output;
    }, 4000);

   
}

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if(!error){
                resolve(console.log("post created at "+ new Date().getTime()));
            }
            else{
                reject("Error: somethng is wrong");
            }
        },3000)
    })
}

                                   
function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            

            const error = false;

            if(!error && posts.length!=0){
                console.log("size of array is: "+ posts.length)
                resolve(posts.pop());
            }
            else{
                reject("Error: nothing to delete Array is empty now");
            }
        },2000)
    })
}




async function showPosts(){
    createPost({title: 'Post 3', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)});
    getPosts();
    createPost({title: 'Post 4', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)});
    getPosts();
    createPost({title: 'Post 5', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)});
    getPosts();
    deletePost();
}

showPosts();