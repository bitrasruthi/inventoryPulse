import { AxiosInstance } from "axios";
import { useEffect, useState, useCallback, useMemo } from "react";

const useAxiosLoader = (_axiosInstance: AxiosInstance) => {
  const [counter, setCounter] = useState(0);

  const inc = useCallback(
    () => setCounter((counter) => counter + 1),
    [setCounter]
  ); // add to counter
  const dec = useCallback(
    () => setCounter((counter) => counter - 1),
    [setCounter]
  ); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: (config) => {
        inc();
        return config;
      },
      response: (response) => {
        dec();
        return response;
      },
      error: (error) => {
        dec();
        return Promise.reject(error);
      },
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    _axiosInstance.interceptors.request.use(
      interceptors.request,
      interceptors.error
    );
    // add response interceptors
    _axiosInstance.interceptors.response.use(
      interceptors.response,
      interceptors.error
    );
    return () => {
      // remove all intercepts when done
      _axiosInstance.interceptors.request.eject(interceptors.request as any);
      _axiosInstance.interceptors.response.eject(interceptors.response as any);
      _axiosInstance.interceptors.response.eject(interceptors.error as any);
    };
  }, [interceptors]);

  return [counter > 0];
};

export default useAxiosLoader;
