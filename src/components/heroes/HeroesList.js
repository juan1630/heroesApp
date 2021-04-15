import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);
     
    
    return (
        <div  className="card-columns" style={{ maxWidth :540}} >
            {
                heroes.map( (heroe) => (  <HeroeCard key={heroe.id}  {...heroe}  />   ))
            }
        </div>
    )
}
