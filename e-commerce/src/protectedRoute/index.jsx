
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProtectedRoute({children}) {
    const isLogged = useSelector(state => state.loginReducer);
    return (
        isLogged ? children : <Navigate to="/login" />
    )
  }
  
  export default ProtectedRoute;