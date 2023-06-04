import styled from 'styled-components/macro';
import { Input } from '../../atoms/Input/Input.styles';
import { SelectBox } from '../../atoms/SelectBox/SelectBox.styles';
import { Button } from '../../atoms/Button/Button.styles';

export const Container = styled.div`
    display: flex;
    align-items: center;

    ${Input} {
        height: 25px;
        border-radius: 0px;
    }

    ${SelectBox} {
        height: 37px;
        border-right: none;
        border-bottom-right-radius: 0px;
        border-top-right-radius: 0;
    }

    ${Button} {
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0;
    }
`;