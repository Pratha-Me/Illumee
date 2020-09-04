import axios from 'axios';

const baseUrl = "http://localhost:5000/";

const FormPostService = (data) => {
    return axios({
        method: 'POST',
        url: baseUrl + 'contact/create',
        data: data
    });
};

export { FormPostService };