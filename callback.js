/*call backs takes connections / relationships as shown below */

var iceCreamStore = {
    Fruits : ["mango","strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts","trooty-Fruity"],
}

/*customer places order */
let customerOrder = (Fruit_name , call_production) =>{
    console.log(`Customer has given his order and selected ${iceCreamStore.Fruits[Fruit_name]} `);

    call_production(); /*calling production function  */ 
}
/*after geting rder by customer the production of icecream starts */
let production = () => {

    setTimeout(() =>{ 
        console.log("production started");

        setTimeout(() =>{
            console.log("Fruits are being chopped down");

            setTimeout(() =>{
                console.log(`${iceCreamStore.liquid[0]} and ${iceCreamStore.liquid[1]} are been added`);

                setTimeout(() =>{
                    console.log("All ingredients are proceesed into the machine");

                    setTimeout(() =>{
                        console.log(`Ice cream was placed in ${iceCreamStore.holder[1]} `);

                        setTimeout(() =>{
                            console.log(`Added ${iceCreamStore.toppings[2]} as finishing`);

                            setTimeout(() =>{
                                console.log("Icecream is ready to be served!");
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },2000)

}

customerOrder(1,production); 


/*Output 
Customer has given his order and selected strawberry 
production started
Fruits are being chopped down
water and ice are been added
All ingredients are proceesed into the machine
Ice cream was placed in cup 
Added trooty-Fruity as finishing
Icecream is ready to be served!

*/

