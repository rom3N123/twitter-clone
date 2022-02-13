import styled from "styled-components";
import Badge from "@mui/material/Badge";

const getBadgeSize = (size?: number) => `${size || 8}px`;

export const SBadge = styled(Badge).attrs(() => ({
    overlap: "circular",
    variant: "dot",
    anchorOrigin: { vertical: "bottom", horizontal: "right" },
}))<{ size?: number }>`
    @keyframes ripple {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        100% {
            transform: scale(2.4);
            opacity: 0;
        }
    }

    & .MuiBadge-badge {
        background-color: #44b700;
        color: #44b700;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.success};
        border-radius: 50%;
        width: ${({ size }) => getBadgeSize(size)};
        height: ${({ size }) => getBadgeSize(size)};

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: ripple 1.2s infinite ease-in-out;
            border: 1px solid currentColor;
            content: "";
        }
    }
`;
