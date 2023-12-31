import { GET, POSt } from './index'

export const addressDetail = (params: Request.AddressDetail) => POSt<Response.AddressDetail>('/client/address/detail', params, { loading: true })
export const addressSave = (params: Request.AddressSave) => POSt<Response.AddressSave>('/client/save/address', params)
export const addressUpdate = (params: Request.AddressSave & { addressId: number }) => POSt<Response.AddressSave>('/client/update/address', params)
export const addressStatus = (params: Request.AddressStatus) => POSt<Response.AddressStatus>('/client/update/address/status', params)
export const getUserInfo = (params = {}) => GET<Response.UserInfo>('client/user/info', params)
export const modifyPassword = (params: Request.ModifyPassword) => POSt<Response.UserInfo>('/client/modify/password', params)
export const bankDetail = (params: Request.BankDetail) => POSt<Response.AddressDetail>('/bank/account/detail', params, { loading: true })
export const bankSave = (params: Request.BankSave) => POSt<Response.UserInfo>('/bank/account/bind', params)
export const profitList = (params: Request.BankDetail) => POSt<Response.AddressDetail>('/profit/list', params, { loading: true })
export const financiaList = (params: Request.BankDetail) => POSt<Response.AddressDetail>('/financial/log/list', params, { loading: true })
export const systemAddressList = (params: Request.AddressDetail) => GET<Response.AddressDetail>('/home/system/address/list', params, { loading: true })
