import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID _NYIF14yi0hxueU27zz0EFj1nuTMk-Cns1vV09plxS8'
    }

})