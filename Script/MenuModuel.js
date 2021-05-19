
const menuModuel = ( function(){

    const menuPizza = [
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
    ]
    
    const menuDrinks = [
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
        {title:"", price:22, image:"", info:"", },
    ]
    
    const getAllPizza = () => {
        return menuPizza;
    }
    
    const getAllDrinks = () => {
        return menuDrinks;
    }
    
    const getPizzaByTitle = (title) => {
        return menuPizza.filter(pizzaTittle => pizzaTittle.title === title);
    }
    
    const getDrinksByTitle = (title) => {
        return menuDrinks.filter(drinksTitle => drinksTitle.title === title);
    }
    
    return {getAllDrinks, getAllPizza, getDrinksByTitle, getPizzaByTitle};
     
    }());
    
    export default menuModuel;