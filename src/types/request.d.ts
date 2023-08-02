declare namespace Request {
  /******   login   ******/
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
  /******   login   ******/



  /******   home   ******/
  type Detail = {}

  type GenerateQRCode = {}

  interface Bind {
    googleCode: number;
  }
  /******   home   ******/
}
