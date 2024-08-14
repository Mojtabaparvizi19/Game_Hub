import axios from "axios";
export interface DataProps<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "be04d384fdcd4072b4795af4f7d6a964",
  },
});
