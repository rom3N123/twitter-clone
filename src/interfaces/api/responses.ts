export interface IResponseFieldError {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface IResponseWithFieldsErrors {
    errors: IResponseFieldError[];
}
