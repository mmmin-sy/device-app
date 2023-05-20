import styled, { css } from 'styled-components/macro';

interface TableHeaderStyleProps {
    columns: number;
    columnsPercentage: number;
}

interface RowStyleProps {
    columns: number;
    columnsPercentage: number;
}

interface CellStyleProps {
    align?: string;
}

export const Table = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export const TableBody = styled.div`
`;

export const TableHeader = styled.div<TableHeaderStyleProps>`
    font-weight: bold;
    ${({ columns, columnsPercentage }) => css`
        display: grid;
        grid-template-columns: repeat(${columns}, ${columnsPercentage}%);
    `}
`;

export const Row = styled.div<RowStyleProps>`
    ${({ columns, columnsPercentage }) => css`
        display: grid;
        grid-template-columns: repeat(${columns}, ${columnsPercentage}%);
    `}
`;

export const Cell = styled.div<CellStyleProps>`
    ${({ align }) => css`
        position: relative;
        padding: 5px;

        ${align && css`
            text-align: ${align};
        `}        
    `}
`;

export const Sort = styled.a`
    cursor: pointer;
    position: absolute;
    right: 5px;
`;

export const Link = styled.a`
    cursor: pointer;
`;