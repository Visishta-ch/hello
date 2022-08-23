console.log("person1: show tickets");
console.log("person2: show tickets");

const promiseSisBringingTickets = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('ticket');
    },3000)
});
const getPopcorn = promiseSisBringingTickets.then((t) => {
    console.log("sis: I haave the tickets");
    console.log("brother: we should goo in");
    console.log("sis: noo I am hungry");

    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log("brother: I got some popcorn")
    console.log("brother: we should goo in");
    console.log("sis: noo I need butter on my popcorn");

    return new Promise((resolve, reject) => resolve(`${t} butter `));
});

const coldDrink = getButter.then((t) => {
    console.log(`bro: i got you ${coldDrink}  and chocolates as well` );
    console.log(`sis: Thanks bro now we shall go in`);
    console.log("bro: thankyou.. finally go in");

    return new Promise((resolve, reject) => resolve(`${t} cold drink`));
})

promiseSisBringingTickets.then((t)=>{
    console.log(`person3 : shows ${t} `);
});
getButter.then((t) => console.log(t))
console.log("person4: show tickets");
console.log("person5: show tickets");