import { POSt } from './index'

export const rechargeHistory = (params: Request.RechargeHistory) => POSt<Response.RechargeHistory>('/recharge/history', params)
export const withdrawalHistory = (params: Request.WithdrawalHistory) => POSt<Response.WithdrawalHistory>('bank/account/withdrawal/detail', params)
