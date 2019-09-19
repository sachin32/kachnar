import React from 'react';
import { Button } from "../../../lib";

const styleObj = {
    marginRight: '5px'
};

const ButtonExample = props => {
    return (
        <div style={{ margin: '10px' }}>
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
            <Button info style={styleObj}>
                Info
            </Button>

            <h2>Button Size</h2>
            <Button style={styleObj} micro>
                Micro
            </Button>
            <Button success style={styleObj} mini>
                Mini
            </Button>
            <Button error style={styleObj} small>
                Small
            </Button>
            <Button warn style={styleObj} big>
                Big
            </Button>
            <Button info style={styleObj} xbig>
                Extra Big
            </Button>
        </div>
    );
};

export default ButtonExample;