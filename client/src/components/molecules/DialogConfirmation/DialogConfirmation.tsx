import { useState, useEffect } from 'react';
import * as Styled from './DialogConfirmation.styles';
import Button from '../../atoms/Button/Button';

interface DialogConfirmationProps {
    text: string;
    onCancle: () => void;
    onConfirm: () => void;
}

const DialogConfirmation = ({ text, onCancle, onConfirm }: DialogConfirmationProps) => {
    const [screenWidth, setScreenWidth] = useState<number>(document.documentElement.clientWidth);
    const [screenHeight, setScreenHeight] = useState<number>(document.documentElement.clientHeight);

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
            <Styled.Dialog
                modalPositionLeft={(screenWidth * 0.5) - 150} 
                modalPositionTop={(screenHeight * 0.5) - 80}
            >
                <Styled.Content>{text}</Styled.Content>
                <Styled.ButtonBox>
                    <Button secondary onClick={() => onCancle()}>Cancel</Button>
                    <Button onClick={() => onConfirm()}>Confirm</Button>
                </Styled.ButtonBox>
            </Styled.Dialog>
        </Styled.Container>
    );
}

export default DialogConfirmation;