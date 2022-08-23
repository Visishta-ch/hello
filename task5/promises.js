/*callbacks */

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
    }, 1000);

   
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
        },1000)
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

function updateLastModified(){
    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            
                posts.updateLastModified = new Date().getTime();
                const error = false;
    
                if(!error && posts.length!=0){
                    resolve(console.log("last modified: "+posts.updateLastModified));
    
                }
               else{
                reject("Error: nothing to update");
               }
            
          
        },1000)
    })
}
getPosts();

console.log(posts.length);


function postUpdates(){
    Promise.all([createPost({title: 'Post three', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)}),deletePost(), updateLastModified()]).then((data)=>{
        console.log("post created at :" + Math.floor(new Date().getTime()/1000) + " last updated at: " + new Date().getTime());
        
    })
    .catch(err => console.error(err));
}
postUpdates();
createPost({title: 'Post five', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)});


//  createPost({title: 'Post three', body: 'this is post three', createdAt: Math.floor(new Date().getTime()/1000)})
// .then() 
//     getPosts()
//     updateLastModified().then(()=> {
//         //.log("last updated time :" + posts.updateLastModified);
//     })
//     //deletePost()

// .catch(err => console.error(err));



// deletePost().then(getPosts).catch(err => console.error(err));

// deletePost().then(getPosts).catch(err => console.error(err));
// deletePost().then(getPosts).catch(err => console.error(err));

//createPost()
// deletePost().then(getPosts).catch(err => console.error(err));
// deletePost().then(getPosts).catch(err => console.error(err));

/*promise all posts */

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 60;
// const promise3 = new Promise((resolve, reject) =>
//             setTimeout(resolve,2000,"Bye-Bye-Buddy"));
// Promise.all([promise1,promise2,promise3]).then((values)=> console.log(values))
