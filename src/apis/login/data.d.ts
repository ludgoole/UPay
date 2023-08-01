export namespace REQ {
  interface Register {
    clientName: string;
    inviteCode: string;
    password: string;
    confirmPassword: string;
    paymentPassword: string;
    confirmPaymentPassword: string;
    email: string;
    phone: string;
  }

  interface Login {
    clientName: string;
    password: string;
    googleCode: string;
  }
}

export namespace RES {
  interface Register {
    code: number,
    message: string,
    data: {
      token: string
      bingCode: number
    }
  }

  interface Login {
    code: number,
    message: string,
    data: {
      token: string
      bingCode: number
    }
  }
}
