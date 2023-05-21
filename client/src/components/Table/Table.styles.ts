import styled, { css } from 'styled-components/macro';

interface CellStyleProps {
    textAlign?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

export const Table = styled.div`
    margin: 0 auto;
`;

export const TableHeader = styled.div`
    font-weight: bold;
    display: grid;
    grid-template-columns: 10% 20% 20% 20% 20% 5% 5%;
    border-bottom: 1px solid #c8c8c8;
    margin-top: 20px;
`;

export const TableBody = styled.div`
    margin-bottom: 20px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 10% 20% 20% 20% 20% 5% 5%;
    border-bottom: 1px solid #c8c8c8;
`;

export const Cell = styled.div<CellStyleProps>`
    ${({ textAlign, justifyContent }) => css`
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 5px;
        word-break: break-all;
        ${textAlign && css`
            text-align: ${textAlign};
        `}        
        ${justifyContent && css`
            justify-content: ${justifyContent};
        `}
    `}
`;

export const Sort = styled.a`
    cursor: pointer;
    height: 20px;
`;

export const Link = styled.a`
    cursor: pointer;
`;