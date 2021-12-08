
import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteChildren {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteChildren> = ({children}) => {
    const isLogged = useSelector((state: RootStateOrAny) => state.loginReducer);

    return (
        isLogged ? children : <Navigate to="/login" />
    )
  }
  
export default ProtectedRoute;