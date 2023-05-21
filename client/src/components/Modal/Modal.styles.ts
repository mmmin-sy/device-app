import styled, { css } from 'styled-components/macro';

interface ModalStyleProps {
    width: number;
    height: number;
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
}
`

export const Modal = styled.div<ModalStyleProps>`    
    ${({ width, height, modalPositionLeft, modalPositionTop }) => css`
        position: fixed;
        width: ${width}px;
        height: ${height}px;
        padding: 25px 20px;

        margin-left: ${modalPositionLeft}px;
        margin-top: ${modalPositionTop}px;
        border-radius: 2px;
        background: #ffffff;
    `}
`
export const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Content = styled.div`
    position: relative;
    height: 100%;
`

export const Bottom = styled.div`
    position: absolute;
    bottom:0;
    width: 100%;
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
