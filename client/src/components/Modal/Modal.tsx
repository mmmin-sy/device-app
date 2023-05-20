import * as Styled from './Modal.styles';

interface ModalProps {
    width: number;
    height: number;
    children: React.ReactNode;
    onCancle: () => void;
    onEdit?: () => void;
}

const Modal = ({ width, height, onCancle, onEdit, children }: ModalProps) => {
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
                        <Styled.Button onClick={() => onCancle()}>Close</Styled.Button>
                        <Styled.Button onClick={() => onEdit && onEdit()}>Edit</Styled.Button>
                    </Styled.ButtonWrap>
                </Styled.ContentWrap>
                
            </Styled.Modal>
        </Styled.Container>
    );
}

export default Modal;