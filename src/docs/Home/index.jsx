import React from 'react';
import Sidebar from "./components/Sidebar";
import sidebarData from './utils/data';
import RouteSwitch from "../Root/component/RouteSwitch";
import BEM from '../utils/bem';

import './style.scss';

const Home = props => {
    const b = BEM('home');
    return (
        <div className={b.toString()}>
            <Sidebar items={sidebarData} />
            <div className={b('container').toString()}>
                <RouteSwitch />
            </div>
        </div>
    );
};

export default Home;