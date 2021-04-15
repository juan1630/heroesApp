import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroesScreen = ({history}) => {

    //obtenemos los parametros de la url
    const {heroeid} =  useParams();

    const hero = getHeroesById(heroeid);

    if(!hero){
        return <Redirect to="/" />
    }

    const {
        superhero,
        alter_ego,
        first_appearance,
        characters,
        publisher,
    } = hero;

    const hendleReturn = () => {

        if(history.length < 2){
            history.push("/")
        }else {

            history.goBack()
        }
    }

    return (
        <div className="row mt-5" >
            <div className="col-md-4">
                <img src={`../assets/${heroeid}.jpg`} className="img-thumbnail" alt="img" />
            </div>
            <div className="col-md-8" >
                <h3  className="center" > { superhero } </h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item"> <b> Alter ego: </b> <b> {alter_ego} </b> </li>
                    <li className="list-group-item"> <b> Firts appearance: </b> <b> {first_appearance} </b> </li>
                    <li className="list-group-item"> <b> Publisher: </b> <b> { publisher } </b> </li>
                </ul>

                <h4> Characters </h4>
                <p> { characters } </p>

                <button className="btn btn-outline-info btn-block" 
                    onClick={hendleReturn}
                >
                    Return 
                </button>

            </div>
        </div>
    )
}
