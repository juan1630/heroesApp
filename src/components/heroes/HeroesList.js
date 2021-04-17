import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroesList = ({publisher}) => {

  //  const heroes = getHeroesByPublisher(publisher);
    const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [publisher] ) 
    
    return (
        <div  className="card-columns animate__animated animate__fadeIn" style={{ maxWidth :540}} >
            {
                heroes.map( (heroe) => (  <HeroeCard key={heroe.id}  {...heroe}  />   ))
            }
        </div>
    )
}
