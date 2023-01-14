export type RegisterUserData = {
   email: string,
   password: string,
   password_confirmation: string,
   purchase_code: string
};

export type RegisterUserPayload = {
   datas: RegisterUserData,
   callback: () => void,
};