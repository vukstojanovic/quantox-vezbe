
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    let isLogged = localStorage.accessToken;

    return (
        isLogged ? children : <Navigate to="/login" />
    )
  }
  
  export default ProtectedRoute;