
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/tipos';


import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {

     const { user, dispatch }  = useContext(AuthContext);
     
     // este hook entra al context del router y nos devuelve el history
    // ya que el nav se encuntra en un provider
     const history = useHistory();


     const { name } = user;

     const handleClick = () => {
        
        dispatch({
            type: types.logout
        });

        history.replace('/login')

     }  

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/find"
                    >
                        Find 
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <p className="text-white mt-3 mr-3" >
                    { name }
                </p>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto"> 
               
                    <button 

                        className="nav-item nav-link btn" 
                        onClick={ handleClick }
                     
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}