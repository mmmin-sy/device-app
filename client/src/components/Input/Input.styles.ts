import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border-radius: 3px;
    padding: 5px;
    border: 1px solid #a1a1a1;
`;

export const Label = styled.span`
    border-radius: 3px;
    padding: 5px;
    border: 1px solid #a1a1a1;
`;

export const ErrorMessege = styled.span`
    height: 10px;
`;

export const Messege = styled.span`
    color: red;
    font-size: 10px;
`;