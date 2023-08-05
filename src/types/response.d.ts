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
    secretKey: string;
  }

  type SystemAddress = AddressDetail

  type Bind = null

  type Recharge = null
  /******   home   ******/

  /******   me   ******/
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
    address: string;
    status: number;
    checked?: boolean;
    createTime: string;
  }

  type AddressSave = null

  type AddressStatus = null
  /******   me   ******/
}
