// const apiConfig = {
//   baseUrl: "https://api.themoviedb.org/3/",
//   apiKey: "1cc28d7cb8202fa7566afa90c4a8b9f4",
//   originalImage: (imgPath) => `https://api.themoviedb.org/t/p/original/${imgPath}`,
//   w500Image: (imgPath) => `https://api.themoviedb.org/t/p/w500/${imgPath}`,
// };
// 
// export default apiConfig;

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1cc28d7cb8202fa7566afa90c4a8b9f4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}
//https://api.themoviedb.org/3/movie/top_rated?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4

export default apiConfig;