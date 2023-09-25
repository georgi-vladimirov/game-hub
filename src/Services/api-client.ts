import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'e2dde355e3db4932b404b9cc0ca16e80'
    }
})