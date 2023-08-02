import { GET, POSt } from './index'

export const detail = (params = {}) => GET<Response.Detail>('/home/detail', params)
export const generateQRCode = (params = {}) => GET<Response.GenerateQRCode>('/client/generateQRCode', params)
export const bind = (params: Request.Bind) => POSt<Response.Bind>('/client/bind/google/code', params)
