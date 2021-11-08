import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <div className="logo">
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" alt="logo" />
            </div>
            <div className="cart-container">
                <div className="cart-icon">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="red-circle"><span>1</span></div>
                </div>
            </div>
        </nav>
    )

}

export default Nav;


