    import React from 'react'
    
    export const LoginScreen = ({history}) => {
    
        const handleClick = ( ) => {
            // hacemos destructuracion de props que trae por defecto y entramos al objeto history

           // history.push('/')
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
    