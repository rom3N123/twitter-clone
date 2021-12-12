import React from "react";

export interface IWithPasswordProps {
    isPasswordVisible: boolean;
    changePasswordVisibility: () => void;
}

const withShowPassword =
    <P extends object>(Component: React.FC<P>): React.FC<any> =>
    (props: P): React.ReactElement => {
        const [passwordVisible, setPasswordVisible] = React.useState(false);

        const changePasswordVisibility = React.useCallback(() => {
            setPasswordVisible((prevState) => !prevState);
        }, []);

        return (
            <Component
                isPasswordVisible={passwordVisible}
                changePasswordVisibility={changePasswordVisibility}
                {...props}
            />
        );
    };

export default withShowPassword;
