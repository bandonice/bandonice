
const resturantModuel = ( function(){

    const resturants = [
        {image:"placeholderrest.jpg", name:"Golden Pizza", adresse:"Drammen, olleveien 30", table:12, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " },
        {image:"placeholderrest.jpg", name:"Silver Pizza", adresse:"Asker, kyllning gata 15", table:9, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " },
        {image:"placeholderrest.jpg", name:"Bronce Pizza", adresse:"Oslo, Henrik olsen 46", table:45, info: "Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. "},
        {image:"placeholderrest.jpg", name:"Platinum Pizza", adresse:"Halden, Evald theies vei 22", table:21, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. "},
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