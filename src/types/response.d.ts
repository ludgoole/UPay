declare namespace Response {
  /******   login   ******/
  interface Register {
    token: string
    bingCode: number
  }

  interface Login {
    token: string
    bingCode: number
  }
  /******   login   ******/



  /******   home   ******/
  interface HomeDetail {
    rupeeBalance: number;
    usdtBalance: number;
  }

  interface GenerateQRCode {
    qrUrl: string;
    imgBase64: string;
    secretKey: string;
  }

  type SystemAddress = AddressDetail

  type Bind = {
    bingCode: number
  }

  type Recharge = null
  type Withdrawal = null
  /******   home   ******/

  /******   order   ******/
  type RechargeHistory = {
    records: Record[];
    total: number;
    size: number;
    current: number;
    orders: any[];
    optimizeCountSql: boolean;
    hitCount: boolean;
    countId?: any;
    maxLimit?: any;
    searchCount: boolean;
    pages: number;
  }

  type WithdrawalHistory = {
    records: Record[];
    total: number;
    size: number;
    current: number;
    orders: any[];
    optimizeCountSql: boolean;
    hitCount: boolean;
    countId?: any;
    maxLimit?: any;
    searchCount: boolean;
    pages: number;
  }
  /******   order   ******/

  /******   me   ******/
  interface UserInfo {
    userId: number
    username: string
    mobileNo: string
    inviteCode: string
    bindCode: number
  }
  interface AddressDetail {
    records: Record[];
    total: number;
    size: number;
    current: number;
    orders: any[];
    optimizeCountSql: boolean;
    hitCount: boolean;
    countId?: any;
    maxLimit?: any;
    searchCount: boolean;
    pages: number;
  }

  interface Record {
    id: number;
    address?: string;
    bankAccount?: string;
    beneName?: string;
    ifsc?: string;
    checked?: boolean;
    status: number;
    createTime: string;
    myAddress?: string;
    systemAddress?: string;
    amount?: string;
    txnId?: string;
    utr?: string;
    userId?: string;
    orderStatus?: string;
  }



  type AddressSave = null

  type AddressStatus = null
  /******   me   ******/
}
