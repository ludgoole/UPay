import { GET, POSt } from './index'

export const detail = (params = {}) => GET<Response.HomeDetail>('/home/detail', params)
export const generateQRCode = (params = {}) => GET<Response.GenerateQRCode>('/client/generateQRCode', params)
export const systemAddress = (params = {}) => GET<Response.SystemAddress>('/recharge/system/address', params)
export const bind = (params: Request.Bind) => POSt<Response.Bind>('/client/bind/google/code', params)
export const recharge = (params: Request.Recharge) => POSt<Response.Recharge>('/recharge/usdt', params)
export const withdrawal = (params: Request.Withdrawal) => POSt<Response.Withdrawal>('/bank/account/withdrawal', params)
