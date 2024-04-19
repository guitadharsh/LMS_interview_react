import axios from "axios"

const userServices = {
    getAllUsers: async () => {
        try {
            const response = await axios.get('api/v1/user/get-all-users')
            return response;
        }
        catch (err) {
            throw err;
        }
    }
}
export { userServices }