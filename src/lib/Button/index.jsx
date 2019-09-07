import React from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';
import BEM from '../../utils/bem';

import './style.scss';

const Button = props => {
    const { size, type, children, className, onClick, ...restProps } = _omit(
        props, ['primary', 'success', 'error', 'warn', 'info', 'mini', 'micro', 'small', 'big', 'xbig']
    );
    const classes = BEM('k_button')({
        primary: props.primary,
        success: props.success,
        error: props.error,
        warn: props.warn,
        info: props.info,
        mini: props.mini,
        micro: props.micro,
        small: props.small,
        big: props.big,
        xbig: props.xbig,
    });
    return (
        <button
            className={classes.mix(className)}
            type={type}
            onClick={onClick}
            {...restProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.bool,
    warn: PropTypes.bool,
    info: PropTypes.bool,
    mini: PropTypes.bool,
    micro: PropTypes.bool,
    small: PropTypes.bool,
    big: PropTypes.bool,
    xbig: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]).isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    primary: false,
    success: false,
    error: false,
    warn: false,
    info: false,
    mini: false,
    micro: false,
    small: false,
    big: false,
    xbig: false,
    size: null,
    type: 'button',
    className: null,
};

export default Button;