import 'axios'

declare module 'axios' {
  export interface AxiosResponse<T = object> extends Promise<T> {
    data: T
  }
}
