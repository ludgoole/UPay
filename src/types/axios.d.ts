
import { AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    // [自定义属性声明]
    loading?: boolean;
    toast?: boolean;
  }
}

declare namespace Axios {
  interface TypeRequestApiResult {
    code: string
    success?: string
    message?: string
    data?: object | object[]
  }
}
