import ArrowBackButton from "@components/Buttons/ArrowBackButton";
import PageHeader from "@components/PageComponents/PageHeader";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const TweetPageHeader: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();

    const { userId } = useParams();

    const onArrowBackClickHandler = (): void => {
        navigate(`/${userId}`);
    };

    return (
        <PageHeader
            title="Tweet"
            borderless
            button={<ArrowBackButton onClick={onArrowBackClickHandler} />}
        />
    );
};

export default TweetPageHeader;
