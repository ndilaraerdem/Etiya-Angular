import { IAddress } from "./IAddress";

export interface IUser {

    name: string,
    surname?: string,
    email: string,
    password: string,
    age?: number,
    math: Math,
    address?: IAddress

}