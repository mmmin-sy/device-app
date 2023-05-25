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
    const [screenWidth, setScreenWidth] = useState<number>(document.documentElement.clientWidth);
    const [screenHeight, setScreenHeight] = useState<number>(document.documentElement.clientHeight);
    const modalPositionLeft = (screenWidth * 0.5) - (width * 0.5);
    const modalPositionTop = (screenHeight * 0.5) - (height * 0.5);

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    const updateScreenSize = () => {
        setScreenWidth(document.documentElement.clientWidth); 
        setScreenHeight(document.documentElement.clientHeight); 
    }

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