import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react';

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  description: string;
  isSeller: boolean;
  address: IAddress;
}

export interface IEditUser {
  fullName: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  description: string;
}

export interface IUserResponse extends Omit<ISignUp, 'address'> {
  id: string;
  createdAt: string;
  updatedAt: string;
  Address: IAddressResponse;
}

export interface IAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement?: string;
}

export interface IAddressResponse extends IAddress {
  id: string;
}

export interface ISendEmailRecover {
  email: string;
}

export interface ISignInResponse {
  token: string;
}

export interface IRecoverPassword {
  password: string;
  confirmPassword: string;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface ImodalsUser {
  recoverPassword: boolean;
  editUser: boolean;
  editAddress: boolean;
  deleteUser: boolean;
}

export interface IUserInputValues {
  cpf: string;
  phone: string;
  cep: string;
}

export interface IUserContext {
  user: IUserResponse | null;
  setUser: Dispatch<SetStateAction<IUserResponse | null>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  modalUser: ImodalsUser;
  setModalUser: Dispatch<SetStateAction<ImodalsUser>>;
  userInputValues: IUserInputValues;
  setUserInputValues: Dispatch<SetStateAction<IUserInputValues>>;
  searchParams: URLSearchParams;
  setSearchParams: Dispatch<SetStateAction<URLSearchParams>>;
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  navigateTo: (route: string) => void;
  signIn: (data: ISignIn) => void;
  signUp: (data: ISignUp) => void;
  sendEmailRecover: (data: ISendEmailRecover) => void;
  recoverPassword: (data: IRecoverPassword, token: string | null) => void;
  editAddress: (data: IAddress) => void;
  editUser: (data: IEditUser) => void;
  deleteUser: () => void;
}
