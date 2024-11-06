export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface HttpRequest<T> {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
  body?: T;
}

export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface Http {
  request: <IResponse, IBody = unknown>(
    props: HttpRequest<IBody>
  ) => Promise<IResponse>;
}
