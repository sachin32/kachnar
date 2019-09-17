import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Suspense = React.Suspense;
const ButtonExample = React.lazy(() => import('../../../components/Button'));

const RouteSwitch = props => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/intro" render={() => <div>Intro</div>} />
            <Route path="/getting-started" render={() => <div>Getting Started</div>} />
            <Route path="/button" component={ButtonExample} />
        </Switch>
    </Suspense>
);

export default RouteSwitch;