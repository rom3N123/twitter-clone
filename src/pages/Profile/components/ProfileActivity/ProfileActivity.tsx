import Text from "@components/Text";
import React from "react";
import * as S from "./ProfileActivity.styled";

export interface IProfileActivityProps {
    to: string;
    amount: number;
    label: string;
}

const ProfileActivity: React.FC<IProfileActivityProps> = ({
    to,
    amount,
    label,
}): React.ReactElement => {
    return (
        <S.SProfileActivityLink to={to}>
            <Text component="span" fontWeight={700}>
                {amount}
            </Text>{" "}
            <Text component="span" color="secondary">
                {label}
            </Text>
        </S.SProfileActivityLink>
    );
};

export default ProfileActivity;
