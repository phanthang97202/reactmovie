import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    // console.log(url)
    // axiosClient.get(url, params)
    //     .then(res => {
    //         console.log(res.results)})
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  reviewUsers: (cate, id) => {
    // https://api.themoviedb.org/3/movie/297762/videos?api_key=e9e9d8da18ae29fc430845952232787c
    const url = category[cate] + "/" + id + "/reviews";
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    // https://api.themoviedb.org/3/search/keyword?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4&page=1&query=naruto
    const url = "search/" + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id) => {
    // https://api.themoviedb.org/3/movie/985939?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, { params: {} });
  },
  credits: (cate, id) => {
    // https://api.themoviedb.org/3/movie/985939/credits?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4
    const url = category[cate] + "/" + id + "/credits";
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    // https://api.themoviedb.org/3/movie/985939/similar?api_key=1cc28d7cb8202fa7566afa90c4a8b9f4
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
