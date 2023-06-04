import { useState } from 'react';
import * as Styled from './SearchBox.styles';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import SelectBox from '../../atoms/SelectBox/SelectBox';

interface SearchBoxProps {
    onSearch: (searchString: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const [searchString, setSearchString] = useState<string>('');
    return (
        <Styled.Container>
            <Input 
                value={searchString} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value)} 
                showValidation={false}
                placeholder="Type somthing.."
            />
            <Button primary onClick={() => onSearch(searchString)}>Search</Button>
        </Styled.Container>
    );
}

export default SearchBox;