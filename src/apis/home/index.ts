import { GET, POSt } from '../index'
import type { REQ, RES } from './data'

export const detail = (params = {}) => GET<RES.Detail>('/home/detail', params)
export const generateQRCode = (params = {}) => GET<RES.GenerateQRCode>('/client/generateQRCode', params)
export const bind = (params: REQ.Bind) => POSt<RES.Bind>('/client/bind/google/code', params)
