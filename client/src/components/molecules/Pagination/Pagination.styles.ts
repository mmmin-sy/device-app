import styled, { css } from 'styled-components/macro';

interface LinkStyleProps {
    isCurrentPage?: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const Pagination = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const Link = styled.a<LinkStyleProps>`
    ${({ isCurrentPage }) => css`
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 10px;
        padding: 5px;

        &:last-child {
            margin-right: 0;
        }

        ${isCurrentPage && css`
            font-weight: bold;
            border-radius: 20px;
            background-color: #3380ff;
            color: #ffffff;
        `}
    `}
    
`;