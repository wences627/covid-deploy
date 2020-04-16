import React from 'react';

const Header = ({title}) => {
    return(
        <nav className='green'>
            <div className="container">
                <div className="nav-wrapper">
                    <a href="index.html" className="brand-logo center">{title}</a>
                </div>
            </div>
        </nav>

    )
}

export default Header