export namespace REQ {
  interface Bind {
    googleCode: number;
  }
}

export namespace RES {
  interface Detail {
    code: number,
    message: string,
    data: {
      rupeeBalance: number;
      usdtBalance: number;
    }
  }

  interface GenerateQRCode {
    code: number,
    message: string,
    data: {
      qrUrl: string;
      secretKey: string;
    }
  }
  interface Bind {
    code: number,
    message: string,
    data: null
  }
}
