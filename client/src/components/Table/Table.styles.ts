import styled, { css } from 'styled-components/macro';

interface RowStyleProps {
    gridTemplateColumns: string;
}

interface CellStyleProps {
    align?: string;
}

export const Table = styled.div`
    margin: 0 auto;
`;

export const TableHeader = styled.div<RowStyleProps>`
    ${({ gridTemplateColumns }) => css`
        font-weight: bold;
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        border-bottom: 1px solid #c8c8c8;
        margin-top: 20px;
    `}
`;

export const TableBody = styled.div`
    margin-bottom: 20px;
`;

export const Row = styled.div<RowStyleProps>`
    ${({ gridTemplateColumns }) => css`
        display: grid;
        grid-template-columns: ${gridTemplateColumns};
        border-bottom: 1px solid #c8c8c8;
    `}
`;

export const Cell = styled.div<CellStyleProps>`
    ${({ align }) => css`
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 5px;
        word-break: break-all;
        ${align && css`
            text-align: ${align};
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