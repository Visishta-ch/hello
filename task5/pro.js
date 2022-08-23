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
    },
    {
        title: 'Post three',
        body: 'this is post 2',
        createdAt : Math.floor(new Date()/ 1000),
    }

];

// var intervalId = 0;
// function getPosts(){
//     clearInterval(intervalId);

//     setInterval(() =>{
//         let output = '';
//         posts.forEach((post,index) => {
//                 output += `<li>${post.title} - created ${Math.floor(new Date().getTime()/1000) - post.createdAt} sec ago</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);

   
// }
var intervalId = 0;
const gpost = async () => {
    clearInterval(intervalId);

    setInterval(() =>{
        let output = '';
        posts.forEach((post,index) => {
                output += `<li>${post.title} - created ${Math.floor(new Date().getTime()/1000) - post.createdAt} sec ago</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);


    const creatpost = new Promise((resolve, reject) => {
        setTimeout(function() {
            posts.push();

            const error = false;

            if(!error){
                resolve('post');
            }
            else{
                reject("Error: somethng is wrong");
            }
        },1000)
    })


    
    const deletePost =  new Promise((resolve, reject) =>{
        setTimeout(function() {            

            const error = false;

            if(!error && posts.length!=0){
                console.log("size of array is: "+ posts.length)
                 var k = posts.pop()
                resolve(k);
            }
            else{
                reject("Error: nothing to delete Array is empty now");
            }
        },2000)
    })


    let [post,k] = await Promise.all[creatpost,deletePost];
    console.log(`${post},${k}`);
    return post;
    
}

gpost().then((post) => console.log("posts created successfully" + post))
 

