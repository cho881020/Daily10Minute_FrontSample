
let axiosInstance = axios.create({
    baseURL: 'http://15.164.153.174',
    // baseURL: 'http://localhost:5000',
    timeout: 3000,
    headers: {'X-Http-Token': $.cookie('userToken')}
})