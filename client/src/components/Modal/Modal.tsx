import { useEffect, useRef, useState } from 'react';
import * as Styled from './Modal.styles';
import Button from '../Button/Button';

interface ModalProps {
    width: number;
    height: number;
    children: React.ReactNode;
    onCancle: () => void;
    onSave?: () => void;
}

const Modal = ({ width, height, onCancle, onSave, children }: ModalProps) => {
    const modalPositionLeft = (document.documentElement.clientWidth * 0.5) - (width * 0.5);
    const modalPositionTop = (document.documentElement.clientHeight * 0.5) - (height * 0.5);

    return (
        <Styled.Container>
            <Styled.Modal
                width={width}
                height={height}
                modalPositionLeft={modalPositionLeft} 
                modalPositionTop={modalPositionTop}
            >
                <Styled.ContentWrap>
                    <Styled.Content>{children}</Styled.Content>               
                    <Styled.ButtonWrap>
                        <Button onClick={() => onCancle()} secondary>Close</Button>
                        <Button onClick={() => onSave && onSave()} primary>Save</Button>
                    </Styled.ButtonWrap>
                </Styled.ContentWrap>
            </Styled.Modal>
        </Styled.Container>
    );
}

export default Modal;