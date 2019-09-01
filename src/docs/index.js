import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../lib';
const styleObj = {
    marginRight: '5px'
};

const App = () => (
    <div>
        <h2>Button</h2>
        <Button style={styleObj}>
            Default
        </Button>
        <Button success style={styleObj}>
            Success
        </Button>
        <Button error style={styleObj}>
            Error
        </Button>
        <Button warn style={styleObj}>
            Warn
        </Button>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));