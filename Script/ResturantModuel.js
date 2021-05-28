
const resturantModuel = ( function(){

    const resturants = [
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Frogner", adresse:"Oslo, Niels Juels gate 33", table:12, info:"Denne restauranten ligger på Frogner. En familievennlig restaurant med fantastiske pizzaer som du kommer til å elske.  " },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Storo", adresse:"Oslo, Vitaminveien 15", table:9, info:"Denne restauranten ligger på Storo med fantastiske pizzaer du aldri har smakt før. En familievennlig restaurant hvor alle er velkommen. " },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grønland", adresse:"Oslo, Grønland 5", table:45, info: "Denne restauranten ligger på Grønland. En fantastisk familievenlig restaurant med en unik pizza meny som du kommer til å falle for. "},
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grunerløkka", adresse:"Oslo,  Torggata 21", table:21, info:"Denne restauranten ligger på Grunerløkka. En restaurant pefekt for familie og venner. Vi har unike og fantastiske pizzaer. "},
    ];

    const getAllresturants = () => {
        return resturants
    };
    
    const getresturantsByName = (name) => {
        return resturants.filter(resName => resName.name.toLowerCase() === name.toLowerCase());
    };
    
    return {getAllresturants, getresturantsByName}
     
    }());
    
    export default resturantModuel;