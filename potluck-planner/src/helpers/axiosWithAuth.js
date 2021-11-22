import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://potluck-planner-3-back-end.herokuapp.com', 
        headers: {
           Authorization: `${token}`
        }
    })
}
