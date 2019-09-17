import React from 'react';
import PropTypes from 'prop-types';
import BEM from '../../../utils/bem';
import SidebarMenu from './component/SidebarMenu';

import './style.scss';

const Sidebar = ({ items }) => {
    const b = BEM('sidebar');
    return (
        <div className={b.toString()}>
            <SidebarMenu items={items} />
        </div>
    );
};

Sidebar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;