    import React, { useContext } from 'react';
    import {  types } from '../../types/tipos';
    import {AuthContext} from '../../auth/AuthContext';
    
    export const LoginScreen = ({history}) => {
    

        const  {dispatch}   = useContext(AuthContext);


        const handleClick = ( ) => {
            // hacemos destructuracion de props que trae por defecto y entramos al objeto history

           // history.push('/')
         

            dispatch({
                type: types.login,
                payload:  {
                    name: 'Juan'
                }
            });

           history.replace("/")

        } 

        return (
            <div 
                className="container mt-5"
            >
                <h2> Login Screen</h2>

                <button className="btn btn-primary"
                    onClick={ handleClick }
                >
                    Login
                </button>

            </div>
        )
    }
    