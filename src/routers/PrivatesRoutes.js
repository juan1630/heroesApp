import React from 'react';
import PropTypes from 'prop-types'

import { Redirect, Route } from 'react-router'

export const PrivatesRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest } 
            component={ (props) => (
                ( isAuthenticated ) ? 
                   ( <Component { ...props} />)
                : ( <Redirect  to="/login" /> )
            )

            }
        />
    )
}


PrivatesRoutes.prototype = {
    isAuthenticated : PropTypes.bool.isRequired,
    component:  PropTypes.func.isRequired
}