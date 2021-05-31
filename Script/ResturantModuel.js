
/*This is a moduel that contains a funstion with a array*/ 
const resturantModuel = ( function(){

    const resturants = [
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Frogner", adresse:"Oslo, Niels Juels gate 33", table:12, info:"This restaurant is located in Frogner. A family-friendly restaurant with wonderful pizzas that you will love. We also got an amazing outside area, bring your dog." },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Storo", adresse:"Oslo, Vitaminveien 15", table:9, info:"This restaurant is located in Storo with wonderful pizzas you have never tasted before. A family-friendly restaurant where everyone is welcome." },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grønland", adresse:"Oslo, Grønland 5", table:45, info: "This restaurant is located in Grønland. A wonderful family-friendly restaurant with a unique pizza-menu that you will fall for."},
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grunerløkka", adresse:"Oslo,  Torggata 21", table:21, info:"This restaurant is located in Grunerløkka. A restaurant perfect for family and friends. We have unique and fantastic pizzas."},
    ];

/*This is a const that returns the array*/
    const getAllresturants = () => {
        return resturants
    };

/*This is a const that returns a filter system for the array list */
    const getresturantsByName = (name) => {
        return resturants.filter(resName => resName.name.toLowerCase() === name.toLowerCase());
    };
    
/*This returns the const that returns stuff */
    return {getAllresturants, getresturantsByName}
}());

/*This exoprt the moduel */
export default resturantModuel;