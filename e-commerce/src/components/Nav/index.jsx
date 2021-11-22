
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/index';

function Nav() {

    const cartItems = useSelector(state => state.cartReducer);
    const isLogged = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/products">
                    <li>Our Products</li>
                </Link>
                <Link to="/dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link to="/signup">
                    <li className={isLogged ? "js-hidden" : ""}>Sign Up</li>
                </Link>
                <Link to="/login">
                    <li className={isLogged ? "js-hidden" : ""}>Login</li>
                </Link>
                    <li className={isLogged ? "" : "js-hidden"} onClick={() => dispatch(logout())}>Logout</li>
            </ul>
            <Link to="/cart">
                <div className="cart-container">
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <div className={cartItems.length > 0 && isLogged ? "red-circle" : "red-circle js-hidden"}><span>{cartItems.length}</span></div>
                    </div>
                </div>
            </Link>
        </nav>
    )

}

export default Nav;


