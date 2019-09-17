import React from 'react';
import PropTypes from 'prop-types';
import _includes from 'lodash/includes';
import { Link, withRouter } from 'react-router-dom';
import BEM from '../../../../../utils/bem';
import SidebarMenu from "../SidebarMenu";

import '../../style.scss';

const SidebarItem = ({ item, location }) => {
    if (!item.link && item.items && item.items.length) {
        return (
            <div>
                {item.title}
                <SidebarMenu items={item.items} />
            </div>
        );
    }
    const b = BEM('sidebar')('sidebar-item');
    return (
        <li key={item.title} className={b.toString()}>
            <Link to={item.link}>{item.title}</Link>
        </li>
    )
};

SidebarItem.propTypes = {
    item: PropTypes.shape({}).isRequired,
};

export default withRouter(SidebarItem);