import axios, { AxiosInstance } from "axios";

class Api {
  http: AxiosInstance;
  constructor() {
    const http = axios.create();
    this.http = http;
  }

  public async get(url: string) {
    const result = await axios.get(url);
    return result;
  }
}

const api = new Api();

export default api;
