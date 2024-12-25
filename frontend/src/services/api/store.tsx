import axios from 'axios';

export const getStoreByUserId = async() => {
    return await axios.get('http://localhost:3000/stores/getStoreByUserId', {
        withCredentials: true});
}