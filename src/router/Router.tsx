import { Routes, Route } from 'react-router-dom';
import { AddCourse, ViewCourse } from '../views'
import { Navbar } from '../components';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route path='view-course' element={<ViewCourse />} />
                <Route path='add-course' element={<AddCourse />} />
            </Route>
        </Routes>
    )
}

export default Router;
