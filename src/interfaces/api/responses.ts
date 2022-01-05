import { IUser } from "@interfaces/api/user";
export interface IResponseFieldError {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface IResponseWithFieldsErrors {
    errors: IResponseFieldError[];
}

export interface IUserResponse {
    user: IUser;
}

export interface ITokenResponse {
    token: string;
}
export interface IUserWithTokenResponse extends IUserResponse, ITokenResponse {}
