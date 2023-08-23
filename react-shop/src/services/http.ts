import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class HttpClient {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create();
  }

  async get(url: string, config?: AxiosRequestConfig) {
    return this.client.get(url, config);
  }

  async put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.client.put(url, data, config);
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.client.post(url, data, config);
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }
}

export default new HttpClient();
