import React, { useMemo } from 'react';

import queryString from 'query-string';

import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../../hooks/useForm'
import { useLocation } from 'react-router';
import { getHeroeByName } from '../../selectors/getHeroByName';

export  const SearchScreen = ({history}) => {

    const  location = useLocation();
    
    const { q = "" } = queryString.parse( location.search );
    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    })
    
    const {  searchText } = formValues;

    
    // este hook se dispara cuando el valor cambia, en este caso de q
    const heroesFiltered = useMemo( ()=> {
       return getHeroeByName( q )
    }, [q] );


    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        history.push(`?q=${searchText}`);
        
        
    }
    
    return (
        <div>
            <h2 className="text-center" > Search Screen  </h2>
            <hr />
            
            <div className="row">
                <div className="col-5" >
                    <h4>Searche form </h4>

                    <form  onSubmit={ handleSubmit } > 

                    <input type="text"
                            placeholder="Buscar heroe..."
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText}
                            onChange={ handleInputChange     }
                            /> 

                            <button className="btn btn-block btn-primary mt-3"type="submit">
                                    Search
                            </button>

                    </form>

                </div>
                <div className="col-7" > 
                    <h4>
                        Results
                    </h4>

                        {
                            (q === "") 
                                &&                         
                                
                                <div className="alert alert-info">
                                    Search a hero
                                </div>

                        }

                        {
                            ( q !== '' && heroesFiltered.length === 0  )
                                &&
                                <div className="alert alert-danger" >
                                        There is not a hero with  { q }
                                </div>
                        }

                    <hr />
                    {
                        heroesFiltered.map( hero => (
                            <HeroeCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>     
        
        </div>
    )
}


