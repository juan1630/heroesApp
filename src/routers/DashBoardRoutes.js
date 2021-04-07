import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/NavBar'
import { MarvelSreecn } from '../../src/components/marvel/MarvelSreecn'
import { HeroesScreen } from '../../src/components/heroes/HeroesScreen'

import {DcSreen } from '../../src/components/dc/DcSreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelSreecn }  />
                    <Route exact path="/heroe/:heroeid" component={ HeroesScreen }  />
                    <Route exact path="/dc" component={ DcSreen }  />
                    <Redirect to="marvel" />
                </Switch>
            </div>
        </>
    )
}
