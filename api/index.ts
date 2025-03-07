import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import RequestProtector from "./RequestProtector";

interface ApiOpts {
  baseURL?: string;
  headers?: any;
}

class Api {
  private xhr: AxiosInstance;

  constructor(opts: ApiOpts = { baseURL: "", headers: {} }) {
    const apiBaseUrl = "https://www.azki.com/api";

    const headers = {
      "Content-Type": "application/json; charset=UTF8",
      ...opts.headers,
    };

    this.xhr = axios.create({
      baseURL: opts.baseURL || apiBaseUrl,
      headers,
    });
  }

  private handleErr = (_err: any) => {};

  private handleRes = (_res: AxiosResponse) => {};

  get<T = AxiosResponse>(
    url: string,
    params?: any
  ): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      const requestProtector = new RequestProtector(
        { url, params },
        reject
      );

      requestProtector.handleRequest(
        (setLoading: (arg0: boolean) => void) => {
          if (setLoading) setLoading(true);

          this.xhr
            .request<T>({
              method: "GET",
              url,
              params,
            })
            .then((res) => {
              if (setLoading) setLoading(false);
              resolve(res);
              this.handleRes(res);
            })
            .catch((err) => {
              if (setLoading) setLoading(false);
              reject(err);
              this.handleErr(err);
            })
            .finally(() => {
              if (setLoading) setLoading(false);
            });
        }
      );
    });
  }

  post(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .post(url, params, config)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  put(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .put(url, params)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  delete(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .delete(url, { data: params })
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  upload(url: string, data: any): Promise<AxiosResponse> {
    return new Promise(async (resolve, reject) => {
      this.xhr
        .post(url, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data;",
          },
        })
        .then((res) => {
          this.handleRes(res);
          resolve(res);
        })
        .catch((err) => {
          this.handleErr(err);
          reject(err);
        });
    });
  }
}

export default Api;
