import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "../Home";
import ErrorBoundary from "../ErrorBoundary";

const Root = props => {
    return (
        <Router basename="/kachnar">
            <ErrorBoundary>
                <Route path="/" component={Home} />
            </ErrorBoundary>
        </Router>
    );
};

export default Root;