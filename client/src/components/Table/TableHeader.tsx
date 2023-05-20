import { useState } from 'react';
import * as Styled from './Table.styles';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

interface TableHeader {
    data: string[];
    hasSort?: boolean;
    hasEdit?: boolean;
    hasDelete?: boolean;
}

const TableHeader = ({ data, hasSort = false, hasEdit = false, hasDelete = false}: TableHeader) => {
    const [ascending, setAscending] = useState<boolean | null>(null);
    let columnCount = Math.floor(data.length);
    columnCount = hasEdit ? columnCount + 1 : columnCount;
    columnCount = hasDelete ? columnCount + 1 : columnCount;

    return (
        <Styled.TableHeader columns={columnCount} columnsPercentage={100/columnCount}>
            {data.map(item => 
                <Styled.Cell>
                    {item}
                    {hasSort && 
                        <Styled.Sort onClick={() => console.log('sort!')}>
                            {(ascending || ascending === null) ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}                            
                        </Styled.Sort>
                    }
                </Styled.Cell>
            )}
        </Styled.TableHeader>  
    );
}

export default TableHeader; 