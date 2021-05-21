
const resturantModuel = ( function(){

    const resturants = [
        {image:"placeholderrest.jpg", name:"Golden Pizza", adresse:"Drammen, ollevien 3", table:33, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " },
        {image:"placeholderrest.jpg", name:"Silver Pizza", adresse:"Asker, Hønsveien 55", table:33, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " },
        {image:"placeholderrest.jpg", name:"Bronce Pizza", adresse:"Oslo, Henrik olsen 22", table:33, info: "Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. "},
        {image:"placeholderrest.jpg", name:"Platinum Pizza", adresse:"Halden, wifi tufu 22", table:33, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. "},
        {image:"placeholderrest.jpg", name:"Daimond Pizza", adresse:"kongvinger, ibesn ripsbusker 99", table:33, info:"Denne resturangen ligger ved den nydelige sjøn, som dere kommer til å else. den her plaseringen, stjernene, tur mulighter, hunder, alt man ønsker seg. " }
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