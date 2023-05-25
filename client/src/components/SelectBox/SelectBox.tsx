import * as Styled from './SelectBox.styles';

interface SelectBoxProps {
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedValue?: string;
}

const SelectBox = ({ options, onChange, selectedValue }: SelectBoxProps) => {
    return (
        <Styled.SelectBox onChange={onChange} defaultValue={selectedValue}>
            {options.map((option, key) => 
                <Styled.Option key={key} value={option}>
                    {option}
                </Styled.Option>
            )}
        </Styled.SelectBox>
    );
}

export default SelectBox;