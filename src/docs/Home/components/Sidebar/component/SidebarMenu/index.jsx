import React from 'react';
import PropTypes from 'prop-types';
import _map from "lodash/map";
import SidebarItem from "../SidebarItem";

const SidebarMenu = ({ items }) => {
    return (
        <ul>
            {
                _map(items, item => (
                    <SidebarItem item={item} key={item.title} />
                ))
            }
        </ul>
    );
};

SidebarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SidebarMenu;