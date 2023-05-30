import * as Styled from './Button.styles';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    primary?: boolean;
    secondary?: boolean;
}

const Button = ({ children, primary = true, secondary, onClick }: ButtonProps) => {
    return (
        <Styled.Button onClick={onClick} primary={primary} secondary={secondary}>
            {children}
        </Styled.Button>
    );
}

export default Button;