import { AxiosError, AxiosInstance } from "axios";
import { Http, HttpRequest } from "./Http";
import axios from "./axios-instance";

export class HttpClient implements Http {
  private constructor(private api: AxiosInstance = axios) {}

  static create = () => new HttpClient();

  async request<IResponse, IBody = unknown>(props: HttpRequest<IBody>) {
    const { url, method, body, params } = props;

    try {
      const { data } = await this.api.request<IResponse>({
        url,
        method,
        data: body,
        params,
      });

      return data as IResponse;
    } catch (error) {
      const errorAxios = error as AxiosError;
      const status = errorAxios.response?.status || 500;
      const message = errorAxios.response?.data || errorAxios.message;
      throw new Error(`Request failed: ${status}: ${message}`);
    }
  }
}
