import styled, { css } from 'styled-components/macro';

interface DialogConfirmationStyleProps {
    modalPositionLeft: number;
    modalPositionTop: number;
}

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 1;
`;

export const Dialog = styled.div<DialogConfirmationStyleProps>`
    ${({ modalPositionLeft, modalPositionTop }) => css`
        position: fixed;
        width: 300px;
        height: 160px;
        padding: 25px 20px;
        margin-left: ${modalPositionLeft}px;
        margin-top: ${modalPositionTop}px;
        border-radius: 2px;
        background: #ffffff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    `}
`;

export const Content = styled.div`
    flex: 1 0 auto;
    justify-content: center;
    display: flex;
    width: 100%;
    align-items: center;
    text-align: center;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-around;
`;