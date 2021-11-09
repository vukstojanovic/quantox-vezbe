import { Link } from 'react-router-dom';
import { useGlobalContext } from './GlobalContext';

function Nav() {

    const {cartItems, setCartItems} = useGlobalContext();

    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/products">
                    <li>Our Products</li>
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


