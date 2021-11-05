
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
          <div className="img">
              <img src="https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png" alt="logo" />
          </div>
          <ul>
            <Link to="/list">
                <li>Git Users List</li>
            </Link>
          </ul>
      </nav>
    );
  }
  
  export default Nav;