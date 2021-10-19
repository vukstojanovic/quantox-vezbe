
import React, {useState} from 'react';
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import xBtn from './images/icon-close-menu.svg';

export default function Nav() {

    const [menuShown, setMenuShown] = useState(false);

    return (
    <div className="nav-container">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <ul className={!menuShown ? "mobile-menu js-hidden" : "mobile-menu"}>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
          </ul>
          <ul className={"desktop-menu"}>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
          </ul>    
          <div className="burger-xBtn">
            <img src={burger} alt="burger" id="burger" className={menuShown ? "js-hidden" : ""} onClick={() => setMenuShown(true)}/>
            <img src={xBtn} alt="xBtn" id="xBtn" className={!menuShown ? "js-hidden" : ""} onClick={() => setMenuShown(false)}/>
          </div>
        </nav>
        <div className={!menuShown ? "dropdown-dark js-hidden" : "dropdown-dark"}></div>
    </div>
    )

}























