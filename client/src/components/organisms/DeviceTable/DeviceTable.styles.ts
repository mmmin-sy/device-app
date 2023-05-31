import styled, { css } from 'styled-components/macro';

interface CellStyleProps {
    fontSize?: number;
    textAlign?: string;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
    header?: boolean;
}

export const Table = styled.div`
    margin: 0 auto;
`;

export const TableHeader = styled.div`
    font-weight: bold;
    display: grid;
    grid-template-columns: 0.4fr 2fr 1fr 2fr 0.5fr 80px;
    margin-top: 20px;
    background-color: #E6EFFF;
`;

export const TableBody = styled.div`
    margin-bottom: 20px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 2fr 1fr 2fr 0.5fr 40px 40px;
    border-bottom: 1px solid #c8c8c8;
`;

export const Cell = styled.div<CellStyleProps>`
    ${({ fontSize, textAlign, justifyContent, header }) => css`
        display: flex;
        align-items: center;
        position: relative;
        padding: 15px 10px;
        word-break: break-word;
        ${textAlign && css`
            text-align: ${textAlign};
        `}        
        ${justifyContent && css`
            justify-content: ${justifyContent};
        `}
        ${fontSize && css`
            font-size: ${fontSize}px;
        `}
        ${header && css `
            border-right: 2px solid #ffffff;
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