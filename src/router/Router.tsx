import { Routes, Route } from 'react-router-dom';
import { AddCourse, ViewCourse, SelectUser } from '../views'
import { Navbar, ProtectedRoute } from '../components';
import { useGlobalData } from '../context/CartContext';

const Router = () => {
    const { isLoggedIn } = useGlobalData()
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<SelectUser />} />
                <Route path='view-course' element={<ProtectedRoute isLoggedIn={isLoggedIn}><ViewCourse /></ProtectedRoute>} />
                <Route path='add-course' element={<ProtectedRoute isLoggedIn={isLoggedIn}><AddCourse /></ProtectedRoute>} />
            </Route>
        </Routes>
    )
}

export default Router;
