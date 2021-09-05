import React from 'react';

const Nav = (props) => {
    return (
        <nav className="toolbar" role="banner">
            {props.appName}
        </nav>
    );
}

export default Nav;