import * as Styled from './SelectBox.styles';

interface SelectBoxProps {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedValue?: string;
}

const SelectBox = ({ options, onChange, selectedValue }: SelectBoxProps) => {
    return (
        <Styled.SelectBox onChange={onChange}>
            {options.map(option => 
                <Styled.Option selected={selectedValue===option} value={option}>
                    {option}
                </Styled.Option>
            )}
        </Styled.SelectBox>
    );
}

export default SelectBox;