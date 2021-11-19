
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Nav() {

    const cartItems = useSelector(state => state.cartReducer);
    // const isLogged = useSelector(state => state.loginReducer);

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/products">
                    <li>Our Products</li>
                </Link>
                <Link to="/signup">
                    <li>Sign Up</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </ul>
            <Link to="/cart">
                <div className="cart-container">
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <div className={cartItems.length > 0 ? "red-circle" : "red-circle js-hidden"}><span>{cartItems.length}</span></div>
                    </div>
                </div>
            </Link>
        </nav>
    )

}

export default Nav;


