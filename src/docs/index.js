import React from 'react';
import ReactDOM from 'react-dom';
import { Notification } from '../lib/Notification';

const App = () => (
    <div>
        <h2>Notification</h2>
        <Notification />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));