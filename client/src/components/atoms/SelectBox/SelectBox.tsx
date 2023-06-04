import * as Styled from './SelectBox.styles';

interface SelectBoxProps {
    options: SelectBoxOption[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedValue?: string;
}

interface SelectBoxOption {
    value: string;
    label: string;
}

const SelectBox = ({ options, onChange, selectedValue }: SelectBoxProps) => {
    return (
        <Styled.SelectBox onChange={onChange} defaultValue={selectedValue}>
            {options.map((option, key) => 
                <Styled.Option key={key} value={option.value}>
                    {option.label}
                </Styled.Option>
            )}
        </Styled.SelectBox>
    );
}

export default SelectBox;