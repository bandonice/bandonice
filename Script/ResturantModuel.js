
const resturantModuel = ( function(){

    const resturants = [
        {image:"geses", name:"ggg", adresse:"efse", table:33, info:"ges" },
        {image:"geses", name:"ggg", adresse:"efse", table:33, info:"ges" },
        {image:"geses", name:"ggg", adresse:"efse", table:33, info:"ges"},
        {image:"geses", name:"ggg", adresse:"efse", table:33, info:"ges" },
        {image:"geses", name:"ggg", adresse:"efse", table:33, info:"ges" }
    ];

    const getAllresturants = () => {
        return resturants
    };
    
    const getresturantsByTitle = (title) => {
        return resturants.filter(resTittle => resTittle.title === title)
    };
    
    return {getAllresturants, getresturantsByTitle}
     
    }());
    
    export default resturantModuel;