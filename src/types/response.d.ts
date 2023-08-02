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
  interface Detail {
    rupeeBalance: number;
    usdtBalance: number;
  }

  interface GenerateQRCode {
    qrUrl: string;
    secretKey: string;
  }

  type Bind = null
  /******   home   ******/
}
