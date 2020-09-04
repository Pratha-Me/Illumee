import axios from 'axios';

const baseUrl = "http://localhost:8080/";

const FormPostService = (data) => {
    return axios({
        method: 'POST',
        url: baseUrl + 'create',
        data,
        headers: {
            'content-type': 'application/json'
        }
    });
};

export { FormPostService };