import { IResponseWithFieldsErrors } from "@interfaces/api/responses";

export const transformBackendFieldsErrors = <
    T extends IResponseWithFieldsErrors
>(
    response: T
) => {};
