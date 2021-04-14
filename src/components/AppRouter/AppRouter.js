import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navBar/navBar';
import ListContainer from '../../containers/ListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from '../../containers/ItemDetailContainer';


function AppRouter() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <ListContainer />
                    </Route>
                    <Route path='/juegos/:itemParam'>
                        <ListContainer />
                    </Route>
                    <Route path='/accesorios/:itemParam'>
                        <ListContainer />
                    </Route>
                    <Route path='/itemDetail/:itemId'>
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;