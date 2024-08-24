import axios, { AxiosRequestConfig } from "axios";

export interface DataProps<T> {
  count: number;
  results: T[];
  next: string | null;
}
export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be04d384fdcd4072b4795af4f7d6a964",
  },
});

class ApiRequest<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<DataProps<T>>(this.endpoint, { ...config })
      .then((res) => res.data);
  };

  getDetail = (slug: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + slug)
      .then((res) => res.data);
  };
}

export default ApiRequest;
