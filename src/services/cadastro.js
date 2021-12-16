import axios from "axios";
import { toast } from "react-toastify";

export const cadastro = (body, clear, setIsLoading) => {
    setIsLoading(true)
    console.log(body)
    axios.post(`https://user-engebio.herokuapp.com/cadastro`, body)
        .then((res) => {
            setIsLoading(false)
            localStorage.setItem('token', res.data.token)
            clear();
            toast.success("Usuário criado com sucesso")
        })
        .catch((err) => {
            setIsLoading(false)
            toast.error("Algo deu errado, verifique se o email ja foi cadastrado")
        })
}