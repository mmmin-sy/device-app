import { useState } from 'react';
import * as Styled from './Input.styles';

interface InputProps {
    value?: any;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessege?: string;
    validateRule?: string;
}

const Input = ({ value, disabled, errorMessege, validateRule, onChange }: InputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [error, setError] = useState(false);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);

        if(validateRule){
            const regex = new RegExp(validateRule);
            setError(!regex.test(event.target.value));
        }
                
        if(onChange) {
            onChange(event);
        }        
    }
    return (
        <Styled.Container>
            <Styled.Input value={inputValue} onChange={onChangeInput} disabled={disabled} />
            <Styled.ErrorMessege>
                {error && (<Styled.Messege>{errorMessege}</Styled.Messege>)}
            </Styled.ErrorMessege>
        </Styled.Container>
    );
}

export default Input;