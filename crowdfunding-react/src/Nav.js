
import logo from './images/logo.svg';
import burger from './images/icon-hamburger.svg';
import xBtn from './images/icon-close-menu.svg';

export default function Nav() {

    return (
    <div className="nav-container">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
          </ul>
          <div className="burger-xBtn">
            <img src={burger} alt="burger" id="burger"/>
            <img src={xBtn} alt="xBtn" id="xBtn" className="js-hidden"/>
          </div>
        </nav>
        <div class="dropdown-dark js-hidden"></div>
    </div>
    )

}























