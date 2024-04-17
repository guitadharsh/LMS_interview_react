import { Routes, Route } from 'react-router-dom';
import { AddCourse, ViewCourse } from '../views'

const Router = () => {
    return (
        <Routes>
            <Route path='/'element={<ViewCourse />}/>
            <Route path='/add-course'element={<AddCourse />}/>1
        </Routes >
    )
}

export default Router