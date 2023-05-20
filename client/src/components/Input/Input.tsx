import { useState } from 'react';
import * as Styled from './Input.styles';

interface InputProps {
    value?: any;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, disabled, onChange }: InputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        if(onChange) {
            onChange(event);
        }        
    }
    return (
        <Styled.Input value={inputValue} onChange={onChangeInput} disabled={disabled} />
    );
}

export default Input;