import axios  from "axios";
import queryString from 'query-string';
import apiConfig from "./apiConfig";

// const axiosClient = axios.get(
//   "https://api.themoviedb.org/3/genre/movie/list?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US"
// )
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     });
// 
// const axiosClient = axios.create({
//   baseURL: "https://some-domain.com/api/",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });
// const {...spread} = axiosClient;
// console.log(spread)
// console.log(spread.defaults.baseURL)

// const controller = new AbortController();
// 
// const axiosClient = axios
//   .get(
//     "https://api.themoviedb.org/3/genre/movie/list?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&language=en-US",
//     {
//       signal: controller.signal,
//     }
//   )
//   .then(function (response) {
//     //...
//   });
// // cancel the request
// controller.abort();
// console.log(queryString)

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        // content gửi đi là json 
        'Content-Type': 'application/json'
    },

    // mặc định , chuyển cái params thành chuỗi json 
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey}) 
});
console.log("paramsSerializer", axiosClient.paramsSerializer);

//https://api.themoviedb.org/3/movie/top_rated?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4
//https://api.themoviedb.org/3/movie/popular?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4
//https://api.themoviedb.org/3/movie/upcoming?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4


// const data = fetch(
//   `https://api.themoviedb.org/3/movie/top_rated?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4`
// );
// 
// data
//     .then(res => res.json())
//     .then(res => {
//         console.log('fetch: ', res)
//     })


axiosClient.interceptors.request.use(async (apiConfig) => apiConfig);

axiosClient.interceptors.response.use( (response) => {
    if(response && response.data){
        console.log("response", response);
        // console.log(response.data)
        return response.data;
    }
    // console.log(response)
    return response;

}, (error) => {
    throw error
})

export default axiosClient;