import { heroes } from '../data/heroes';


export const getHeroeByName = (name = "" ) => {
   // convertimos a mayusculas el name que se recibe 

   if( name === ""){
    return [];
   }
    name = name.toLowerCase();
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes( name ));
}