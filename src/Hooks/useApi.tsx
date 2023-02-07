import axios from "axios"

export const useApi = () => ({
    signIn: async (login: string, password: string) => {
        const { data } = await axios.post(`http://localhost:3333/api/auth-signin`, { login, password })
        return data;
    },
    forgetPass: async (login: string, email: string) => {
        const { data } = await axios.post(`http://localhost:3333/api/auth-forget-pass`, { login, email })
        return data;
    }
})