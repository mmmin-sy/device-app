import styled, { css } from 'styled-components/macro';

interface TableHeaderStyleProps{
    columns: number;
    columnsPercentage: number;
}

interface RowStyleProps{
    columns: number;
    columnsPercentage: number;
}

export const Table = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export const TableBody = styled.div`
`;

export const TableHaeder = styled.div<TableHeaderStyleProps>`
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

export const Cell = styled.div`
    padding: 5px;
    display: flex;
    justify-content: space-between;
`;

export const Sort = styled.a`
    cursor: pointer;
`;