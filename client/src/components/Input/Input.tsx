import { useState } from 'react';
import * as Styled from './Input.styles';

interface InputProps {
    type?: string;
    value?: any;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    validateRule?: string;
    min?: number;
    minLength?: number;
    max?: number;
    maxLength?: number;
}

const Input = ({ type = 'text', value, disabled, min, minLength, max, maxLength, errorMessage, validateRule, onChange }: InputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const [error, setError] = useState(false);
    const [currentErrorMessage, setCurrentErrorMessage] = useState(errorMessage);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setInputValue(value);

        if(validateRule){
            const regex = new RegExp(validateRule);
            setError(!regex.test(value));
        }

        if(min !== undefined) {
            setError(min > parseInt(value))
            setCurrentErrorMessage(`Value should be min ${min}.`)
        }

        if(max !== undefined) {
            setError(max < parseInt(value))
            setCurrentErrorMessage(`Value should be max ${max}.`)
        }
                
        if(onChange) {
            onChange(event);
        }        
    }

    return (
        <Styled.Container>
            <Styled.Input 
                type={type}
                min={min} 
                minLength={minLength} 
                max={max} 
                maxLength={maxLength} 
                value={inputValue} 
                onChange={onChangeInput} 
                disabled={disabled} 
            />
            <Styled.ErrorMessege>
                {error && (<Styled.Messege>{currentErrorMessage}</Styled.Messege>)}
            </Styled.ErrorMessege>
        </Styled.Container>
    );
}

export default Input;