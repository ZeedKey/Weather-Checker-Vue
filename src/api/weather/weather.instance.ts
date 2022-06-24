import axios from "axios";

export const weather_api = axios.create({
    baseURL: import.meta.env.VITE_APP_WEATHER_API_URL,
});

weather_api.interceptors.request.use(
    function (config) {
      config.params.key = import.meta.env.VITE_APP_WEATHER_API_KEY;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );