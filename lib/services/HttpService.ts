import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpService {
  httpClient: AxiosInstance;
  safePromise(promise: () => Promise<AxiosResponse>): Promise<AxiosResponse>;
}

class HttpService {
  public httpClient: AxiosInstance;

  constructor(options: AxiosRequestConfig) {
    this.httpClient = axios.create(options);
  }

  safePromise = async (promise: () => Promise<AxiosResponse>) => {
    try {
      const response = await promise();
      return response;
    } catch (err: any) {
      console.error(`Failed to fetch data. ${err.message}`);
      throw err;
    }
  };
}

export default HttpService;
