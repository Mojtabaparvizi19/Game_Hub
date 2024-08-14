// import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient";
// import { AxiosRequestConfig, CanceledError } from "axios";

// function useData<T>(
//   endpoint: string,
//   request?: AxiosRequestConfig,
//   dep?: any[]
// ) {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       document.title = "Game Hub";
//       const controller = new AbortController();
//       setLoading(true);
//       apiClient
//         .get<DataProps<T>>(endpoint, { signal: controller.signal, ...request })
//         .then((response) => {
//           setData(response.data.results);
//           setLoading(false);
//         })
//         .catch((error) => {
//           if (error instanceof CanceledError) return;
//           setError(error.message);
//           setLoading(false);
//         });
//       return () => controller.abort();
//     },
//     dep ? [...dep] : []
//   );
//   return { data, error, isLoading };
// }

// export default useData;
