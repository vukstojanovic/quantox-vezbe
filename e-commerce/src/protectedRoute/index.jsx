
import { Navigate } from 'react-router-dom';


function ProtectedRoute({children}) {
    const isLogged = localStorage.accessToken;
    console.log(isLogged);
    return (
        isLogged ? children : <Navigate to="/login" />
    )
  }
  
  export default ProtectedRoute;