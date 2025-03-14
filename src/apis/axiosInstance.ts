import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from "axios";

const globalConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_TRANSACTION_TIME) || 3000,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance: AxiosInstance = axios.create(globalConfig);

type RequestType = "get" | "post" | "put" | "patch" | "delete";

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // status code - 200
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

async function request<T>(
  requestType: RequestType,
  url: string,
  params?: object,
  data?: object,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axiosInstance.request<T>({
      method: requestType,
      url,
      params,
      data,
      ...config,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("axiosInstance - error: ", error);
      return Promise.reject(error.response?.data);
    }
    return Promise.reject({
      result: false,
      fail: {
        trID: "",
        message: "An unknown error occurred",
      },
    });
  }
}

export default request;
