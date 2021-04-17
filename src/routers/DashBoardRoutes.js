import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Navbar } from '../components/ui/NavBar'
import { MarvelSreecn } from '../../src/components/marvel/MarvelSreecn'
import { HeroesScreen } from '../../src/components/heroes/HeroesScreen'
import { SearchScreen } from '../../src/components/search/SearchScreen'

import {DcSreen } from '../../src/components/dc/DcSreen';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={ MarvelSreecn }  />
                    <Route exact path="/hero/:heroeid" component={ HeroesScreen }  />
                    <Route exact path="/dc" component={ DcSreen }  />
                    <Route exact path="/find" component={ SearchScreen } />
                    <Redirect to="marvel" />
                </Switch>
            </div>
        </>
    )
}
