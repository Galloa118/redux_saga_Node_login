import axios from 'axios';

export const fetchUserAPI = (keyword) =>
    // axios.get('https://api.github.com/users/'+keyword+'/repos'); 
    axios.get(`https://api.github.com/search/users?q=${keyword}`);
    