import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../Home';
import ButtonExample from "../components/Button";

const Root = props => {
    return (
        <Router basename="/kachnar">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/button" component={ButtonExample} />
            </Switch>
        </Router>
    );
};

export default Root;