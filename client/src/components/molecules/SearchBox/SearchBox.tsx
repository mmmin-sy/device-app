import { useState } from 'react';
import * as Styled from './SearchBox.styles';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import SelectBox from '../../atoms/SelectBox/SelectBox';

interface SearchBoxProps {
    onSearch: (searchType: string, searchString: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const [searchType, setSearchType] = useState<string>('');
    const [searchString, setSearchString] = useState<string>('');
    return (
        <Styled.Container>
            <SelectBox 
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSearchType(event.target.value)} 
                options={[
                    { value: 'all', label: 'All'},
                    { value: 'deviceName', label: 'Device Name'},
                    { value: 'deviceType', label: 'Device Type'},
                    { value: 'ownerName', label: 'Owner Name'},
                    { value: 'batteryStatus', label: 'Battery Status'}
                ]} 
            />
            <Input 
                value={searchString} 
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchString(event.target.value)} 
                showValidation={false}
                placeholder="Type somthing.."
            />
            <Button primary onClick={() => onSearch(searchType, searchString)}>Search</Button>
        </Styled.Container>
    );
}

export default SearchBox;