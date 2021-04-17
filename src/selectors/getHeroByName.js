import { heroes } from '../data/heroes';


export const getHeroeByName = (name) => {
    return heroes.filter(heroe => heroe.name === name);
}