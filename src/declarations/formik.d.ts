import "formik";

declare module "formik" {
    export interface IFormikDefaultProps {
        isValid: boolean;
        dirty: boolean;
        touched: boolean;
    }
}
