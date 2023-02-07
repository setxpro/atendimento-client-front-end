import { createContext, ReactNode, useState, useEffect } from 'react';
import { TypeAuth, User } from '../../Types/User';
import { useApi } from './../../Hooks/useApi';
import { toast } from 'react-toastify';

export const AuthContext = createContext({} as TypeAuth)

const AuthProvider = ({children}:{children:ReactNode}) => {

    const api = useApi();
    
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (login: string, password: string) => {
        try {
          const data = await api.signIn(login, password);

        if (data.user) {
            setUser(data.user)
            setUserDb(data.user)
            return true;
        }

        } catch (error:any) {
          toast.error(error.response.data.msg)
        }
        return false;

    }

    const forgetPass = async (login: string, email: string) => {
      try {
        const data = await api.forgetPass(login, email);
        toast.success(data.message);
        return data;
      } catch (error: any) {
          return toast.error(error.response.data.msg)
      }
    }

    const setUserDb = (user: string) => {
      const setInLocalStorage = localStorage.setItem("auth-user-called", JSON.stringify(user))
      return setInLocalStorage;
    }

    useEffect(() => {
      const haveUser = localStorage.getItem("auth-user-called")

      if (haveUser) {
        const foundUser = JSON.parse(haveUser);
        return setUser(foundUser);
      }

    }, [])

    const logout = () => {
      setUser(null);
      localStorage.removeItem("auth-user-called");
    }

  return (
    <AuthContext.Provider value={{
        user,
        signIn,
        logout,
        forgetPass
    }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;