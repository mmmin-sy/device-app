import styled, { css } from 'styled-components/macro';

interface ButtonStyleProps {
    primary?: boolean;
    secondary?: boolean;
}

export const Button = styled.button<ButtonStyleProps>`
    ${({ primary, secondary }) => css`
        border-radius: 5px;
        border: 1px solid #c8c8c8;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;

        ${primary && css`
            background: #3380ff;
            color: #ffffff;
            border-color: #3380ff;
        `}

        ${secondary && css`
            color: #3380ff;
            background: #ffffff;
        `}

        &:hover {
            opacity: 0.7;
        }

    `}
`;