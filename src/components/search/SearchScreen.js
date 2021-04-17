import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroeCard } from '../heroes/HeroeCard';
import { useForm } from '../../hooks/useForm'

export  const SearchScreen = () => {

    const heroesFiltered = heroes;
    const [formValues, handleInputChange] = useForm({
        searchText: ""
    })

    const {  searchText } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchText)
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


