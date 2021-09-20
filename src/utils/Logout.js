import {useHistory } from 'react-router-dom';
import Login from '../views/Login';

const TOKEN_KEY = 'jwt';


export const Logout = ()=>{
    localStorage.removeItem(TOKEN_KEY);
    
}
