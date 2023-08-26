import { POSt } from './index'

export const register = (params: Request.Register) => POSt<Response.Register>('/client/register', params)
export const login = (params: Request.Login) => POSt<Response.Login>('/client/login', params)
export const logout = (params = {}) => POSt<Response.Login>('/client/logout', params)
