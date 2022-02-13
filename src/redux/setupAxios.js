export default function setupAxios(axios, store) {
  axios.interceptors.request.use(async (config) => {
      config.headers = { 'app-id': '6207f6e39cbeec424229c5a6' };

      return config;
    },
    err => Promise.reject(err)
  );
}
