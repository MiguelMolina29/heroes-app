import React from 'react';
import Navbar from '../components/dc/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelScreen from '../components/dc/marvel/MarvelScreen';
import HeroeScreen from '../components/dc/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/dc/search/SearchScreen';

const DashboardRoutes = ({history}) => {
    return (
        <>
            <Navbar history={history}/>

            <div className="container mt-2">

                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroeScreen}/>
                    <Route exact path="/dc/" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel"/>

                </Switch>


            </div>
        </>
    )
}

export default DashboardRoutes
