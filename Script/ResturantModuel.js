
const resturantModuel = ( function(){

    const resturants = [
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Frogner", adresse:"Oslo, Niels Juels gate 33", table:12, info:"Denne resturangen ligger på Frogner. En familievennlig resturant med fantastiske pizzaer. " },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Storo", adresse:"Oslo, Vitaminveien 15", table:9, info:"Denne resturangen ligger på Storo med fantastiske pizzaer du aldri har smakt før. " },
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grønland", adresse:"Oslo, Grønland 5", table:45, info: "Denne resturangen ligger på Grønland. En fantastisk resturant med en unik pizza meny.. "},
        {image:"placeholderrest.jpg", name:"Gyldne Pizza Grunerløkka", adresse:"Oslo,  Torggata 21", table:21, info:"Denne resturangen ligger på Grunerløkka. En resturant pefekt for familie og venner. Vi har noen unike og fantastiske pizzaer for en fantastisk pris. "},
        {image:"placeholderrest.jpg", name:"Diamond Pizza", adresse:"kongvinger, Tjuvholmen 9", table:3, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " }
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