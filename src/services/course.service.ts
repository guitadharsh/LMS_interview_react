import axios from "axios";
import { CourseRegister } from "../types";

const courseServices = {
    createNewCourse: async (userId: number | undefined, payload: CourseRegister) => {
        try {
            const response = await axios.post(`api/v1/course/create-course/${userId}`, {
                payload
            });
            return response;
        } catch (err) {
            throw err;
        }
    },

    getAllCourses: async (userId: number | undefined) => {
        try {
            const response = await axios.get(`api/v1/course/get-all-course/${userId}`)
            return response;
        }
        catch (err) {
            throw err;
        }
    }
};

export { courseServices };
