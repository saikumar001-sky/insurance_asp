const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

//request interceptor
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// response interceptor
instance.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    return Promise.reject(error);
});