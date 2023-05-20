import { useState } from 'react';
import * as Styled from './Input.styles';

interface InputProps {
    value?: string;
}

const Input = ({ value }: InputProps) => {
    const [inputValue, setInputValue] = useState(value);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }
    return (
        <Styled.Input value={inputValue} onChange={onChangeInput} />
    );
}

export default Input;