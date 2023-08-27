import { GET, POSt } from './index'

export const totalDetail = (params = {}) => GET<Response.TotalDetail>('/home/total/detail', params)
export const rechargeHistory = (params: Request.RechargeHistory) => POSt<Response.RechargeHistory>('/recharge/history', params, { loading: true })
export const withdrawalHistory = (params: Request.WithdrawalHistory) => POSt<Response.WithdrawalHistory>('bank/account/withdrawal/detail', params, { loading: true })
