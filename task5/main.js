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


function createPost(post,callback) {
    setTimeout(() => {
        posts.push({...post,createdAt: Math.floor(new Date().getTime()/1000)});
        callback();
    },2000); 
}

function create4thPost(post,callback1) {
    setTimeout(() => {
        posts.push({...post,createdAt: Math.floor(new Date().getTime()/1000)});
        callback1();
    },4000);
    
}

var timer;
var count = 0;
function  lastEditedInSecondsAgo(){
    count = 0;
    // var li = document.createElement('li');
    // li.appendChild(document.createTextNode('LastEdited'+count+' seconds ago'));
    clearInterval(timer);
    timer = setInterval(() =>{
        count++;
        console.log('last updated'+ count +' seconds ago');
    },1000);
}
//getPosts();
createPost({title: 'Post three', body: 'this is post three'},getPosts);
create4thPost({title: 'Post four', body: 'this is post four'},getPosts);

lastEditedInSecondsAgo();