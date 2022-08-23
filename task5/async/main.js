console.log("person1: show tickets");
console.log("person2: show tickets");

const preMovie = async() => {
    const promiseSisBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('tickets'),3000);
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('cold drinks'));

    let tickets = await promiseSisBringingTickets;

    let[popcorn,butter,coke] = await Promise.all([getPopcorn,getButter,getColdDrinks]);

    console.log(`${popcorn},${butter},${coke}`);
    return tickets;
}

preMovie().then((m) => console.log(`person 3: shows ${m}`));
console.log("person4: show tickets");
console.log("person5: show tickets");