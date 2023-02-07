import { useContext } from 'react';
import { AuthContext } from '../../Contexts/Auth';
import Login from '../../Pages/Login';

export const Security = ({children}: {children: JSX.Element}) => {

    const { user } = useContext(AuthContext)
  
      if (!user) {
          return <Login/>
      }
  
      return children
}