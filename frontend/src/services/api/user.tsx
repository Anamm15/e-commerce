import axios from 'axios';

interface User {
    name: string;
    bio: string;
    gender: string;
    birth_place: string;
    birth_date: string;
    address: string;
    phone_num: string;
    email: string;
    username: string;
    password: string;
}

export const login = async(data: Pick<User, 'username' | 'password'>) => {
    const response = await axios.post('http://localhost:3000/auth/login', data, {
        withCredentials: true
    });
    return response;
}

// export const register = async(data) => {

// }