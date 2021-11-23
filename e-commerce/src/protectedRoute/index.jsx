
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const isLogged = useSelector(state => state.cartReducer);

    return (
        isLogged ? children : <Navigate to="/login" />
    )
  }
  
  export default ProtectedRoute;