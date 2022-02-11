import { IResponseWithFieldsErrors } from "_types/api/responses";

export const transformBackendFieldsErrors = <
    T extends IResponseWithFieldsErrors
>(
    response: T
) => {};
