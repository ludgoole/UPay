import { POSt } from '../index'
import type { REQ, RES } from './data'

export const register = (params: REQ.Register) => POSt<RES.Register>('/client/register', params)
export const login = (params: REQ.Login) => POSt<RES.Login>('/client/login', params)
