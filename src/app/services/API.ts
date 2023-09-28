import axios from 'axios';

export function api( url: string = "http://localhost:8081") {

    return axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTU0OTU1MTIsImV4cCI6MTY5NTU4MTkxMn0.pgFnFIY6YN9eapcL77hWWPDVbyarxlssYLa0YG2Ixztrv60Imd36RcxBJzWnTMJJ"
        }
    });

}