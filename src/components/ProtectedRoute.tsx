import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    isLoggedIn: boolean;
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
        return <>{children}</>;
    } else {
        return <Navigate to="/" replace />;
    }
};

export default ProtectedRoute;
