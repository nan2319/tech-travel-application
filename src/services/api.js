import axios from "axios";

const api= axios.create({
    baseURL: 'https://6289b86de5e5a9ad321c3f00.mockapi.io'
});

export default api;