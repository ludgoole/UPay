declare namespace API {
  interface Register {
    req: {
      clientName: string;
      inviteCode: string;
      password: string;
      confirmPassword: string;
      paymentPassword: string;
      confirmPaymentPassword: string;
      email: string;
      phone: string;
    },
    res: {
      token: string
      bingCode: number
    }
  }

  interface Login {
    req: {
      clientName: string;
      password: string;
      googleCode: string;
    },
    res: {
      token: string
      bingCode: number
    }
  }
}
