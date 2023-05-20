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
}
`

export const Modal = styled.div<ModalStyleProps>`    
    ${({ width, height, modalPositionLeft, modalPositionTop }) => css`
        position: fixed;
        box-shadow: 0px 0px 5px 2px #a1a1a1;
        width: ${width}px;
        height: ${height}px;
        padding: 10px; 

        margin-left: ${modalPositionLeft}px;
        margin-top: ${modalPositionTop}px;
        border-radius: 5px;
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

export const Button = styled.a`
    border-radius: 3px;
    border: 1px solid #a1a1a1;
    padding: 5px;
    cursor: pointer;

    &:hover {
        color: #a1a1a1;
    }
`;