import axios, { AxiosRequestConfig } from "axios";
import type { AxiosInstance } from "axios";

class zRequest {
  instance: AxiosInstance;
  constructor(shiLi: AxiosRequestConfig<any>) {
    this.instance = axios.create(shiLi);

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config: AxiosRequestConfig<any>) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
  get(config: any) {
    return this.request({ ...config, method: "GET" });
  }
  post(config: any) {
    return this.request({ ...config, method: "POST" });
  }
  patch(config: any) {
    return this.request({ ...config, method: "PATCH" });
  }
  delete(config: any) {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default zRequest;
