var iceCreamStore = {
    Fruits : ["mango","strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts","trooty-Fruity"],
}

let is_shop_open = true;

let order = (time,work) => {

    return new Promise( (resolve, reject) => {

        if(is_shop_open){

            setTimeout(() => {
                resolve( work())
            },time)
           
        }
        else{
            reject(console.log("Shop is closed"))
        }
    })
}

order(2000, () => {
    console.log(`${iceCreamStore.Fruits[1]} was selected`)
    })
    .then(() => {

        return order(0000,()=> console.log("production has started"))

    }).then(() => {

        return order(2000,()=> console.log("fruits are been chooped"))

    }).then(() => {

        return order(1000,()=> console.log(`Added ${iceCreamStore.liquid[0]} and ${iceCreamStore.liquid[1]} to the chopped fruits`))

    }).then(() => {

        return order(1000,()=> console.log("Ingredient are now added to machinery"))

    }).then(() => {

        return order(2000,()=> console.log(`holder ${iceCreamStore.holder[0]} is taken`))
    }).then(() => {
        return order(3000, () => {
            console.log(`${iceCreamStore.toppings[0]} are added as toppings`)
        })
    }).then(() => {

        return order(2000, ()=> console.log('Ice cream is ready to serve'))
    })
    .catch((err) => console.log("customer left" + err))

    .finally(()=>{
        console.log('day ended. Shop is closed')
    })/*it runs in both ways even if promise is resolved or rejected */



/* output
    
strawberry was selected
production has started
fruits are been chooped
Added water and ice to the chopped fruits
Ingredient are now added to machinery
holder cone is taken
chocolate are added as toppings
Ice cream is ready to serve */