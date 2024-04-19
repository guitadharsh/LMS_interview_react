import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    isLoggedIn: boolean;
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
    const isUserLoggedInString = localStorage.getItem('isUserLoggedIn');
    const isUserLoggedIn = isUserLoggedInString === 'true'; 

    if (isLoggedIn || isUserLoggedIn) {
        return <>{children}</>;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default ProtectedRoute;
