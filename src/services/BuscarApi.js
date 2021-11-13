import axios from "axios";

const RandomUser= axios.create({
    baseURL: "https://randomuser.me/api/?results=54&seed=666"
});

export default RandomUser;