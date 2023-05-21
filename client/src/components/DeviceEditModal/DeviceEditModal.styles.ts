import styled from 'styled-components/macro';
import { Input } from '../../components/Input/Input.styles';

export const Container = styled.div`
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    ${Input} {
        margin-left: 10px;
    }
`;

export const Label = styled.div`
    font-weight: bold;
    font-size: 15px;
`;