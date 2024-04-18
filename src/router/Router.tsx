import { Routes, Route } from 'react-router-dom';
import { AddCourse, ViewCourse, SelectUser } from '../views'
import { Navbar } from '../components';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<SelectUser />} />
                <Route path='view-course' element={<ViewCourse />} />
                <Route path='add-course' element={<AddCourse />} />
            </Route>
        </Routes>
    )
}

export default Router;
