import React from 'react';
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router';


 const PublicRoutes = ({ isAuthenticated, 
                        component: Component,
                        ...rest
                    }) => {
    return (
        <Route 
        { ...rest }
        component={ (props) => (
                ( !isAuthenticated ) ? 
                ( <Component { ...props} />)
                : ( <Redirect  to="/" /> )
         ) }
        />
    )
}


PublicRoutes.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


export default PublicRoutes;