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
  type HomeDetail = {}

  type GenerateQRCode = {}

  interface Bind {
    googleCode: number;
  }

  interface Recharge {
    amount: number;
    myAddressId: number;
    systemAddressId: number;
    googleCode: number;
  }
  /******   home   ******/

  /******   me   ******/
  type AddressDetail = {}

  type AddressSave = {
    address: string;
    googleCode: string;
  }
  type AddressStatus = {
    addressId: number;
    status: number;
  }
  /******   me   ******/
}
