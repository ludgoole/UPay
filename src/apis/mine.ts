import { POSt } from './index'

export const addressDetail = (params = {}) => POSt<Response.AddressDetail>('/client/address/detail', params)
export const addressSave = (params: Request.AddressSave) => POSt<Response.AddressSave>('/client/save/address', params)
export const addressUpdate = (params: Request.AddressSave & { addressId: number }) => POSt<Response.AddressSave>('/client/update/address', params)
export const addressStatus = (params: Request.AddressStatus) => POSt<Response.AddressStatus>('/client/update/address/status', params)
