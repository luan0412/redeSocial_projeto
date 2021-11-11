import axios from "axios";

const StartCadastroApi= axios.create({
    baseURL: "https://start-cadastro.herokuapp.com/"
});

export default StartCadastroApi;
