import React from 'react';
import piraLogo from '../assets/images/piraLogo.png';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <img
                src={piraLogo}
                alt="Logo"
                height="70px"
                width="70px"
            />
            <h4 className="piraNews">PiraNews</h4>
        </div>
    )
}

export default Toolbar
