import axios from 'axios';

const baseUrl = process.env.REACT_APP_LIVESERVER;

const FormPostService = (data) => {
    return axios({
        method: 'POST',
        url: baseUrl + 'email/send-mail',
        data: data
    });
};

const FormDataPostService = (data)=> {
    return axios({
        method: 'POST',
        url: baseUrl + 'contact/create',
        data: data
    })
    
}

export { FormPostService, FormDataPostService };