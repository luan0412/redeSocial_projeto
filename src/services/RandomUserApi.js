import axios from "axios";

const RandomUserApi= axios.create({
    baseURL: "https://randomuser.me/api/"
});

export default RandomUserApi;
