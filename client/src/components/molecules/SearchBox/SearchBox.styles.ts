import styled from 'styled-components/macro';
import { Input } from '../../atoms/Input/Input.styles';

export const Container = styled.div`
    display: flex;
    align-items: center;

    ${Input} {
        height: 24px;
        margin-right: 10px;
    }
`;