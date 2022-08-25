var iceCreamStore = {
    Fruits : ["mango","strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts","trooty-Fruity"],
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject) => {

        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log('shop is closed'))
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${iceCreamStore.Fruits[3]} is selected`);

        await time(0000)
        console.log('Start the production');

        await time(2000)
        console.log('fruits are chopped');
        await time(2000)
        console.log(`${iceCreamStore.liquid[0]} and ${iceCreamStore.liquid[1]} are been added`);
        await time(1000)
        console.log('All ingredients are proceesed into the machine');
        await time(2000)
        console.log(`Ice cream was placed in ${iceCreamStore.holder[1]} `)
        await time(3000)
        console.log(`Added ${iceCreamStore.toppings[2]} as finishing`)
        await time(2000)
        console.log("Icecream is ready to be served!")
    }
    catch(error){
        console.log("customer left",error);
    }

 
}

kitchen();

/* output

banana is selected
Start the production
fruits are chopped
water and ice are been added
All ingredients are proceesed into the machine
Ice cream was placed in cup 
Added trooty-Fruity as finishing
Icecream is ready to be served! */