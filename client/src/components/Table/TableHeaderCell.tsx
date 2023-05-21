import { useState, useEffect } from 'react';
import * as Styled from './Table.styles';
import { BiSortAlt2, BiSortDown, BiSortUp } from 'react-icons/bi';

interface TableHeaderCellProps {
    index: number;
    item: any;
    hasSort?: boolean;
    onSorting?: (index: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;
}

const TableHeaderCell = ({ index, item, hasSort, onSorting, currentAscendingIndex }: TableHeaderCellProps) => {
    const [ascending, setAscending] = useState<boolean>(false);
    const [activeSorting, setActiveSorting] = useState<boolean>(false);

    useEffect(() => {
        if (currentAscendingIndex !== index){
            setActiveSorting(false);
        }
    }, [currentAscendingIndex]);

    const sorting = (index: number) => {
        if(onSorting){
            if(!activeSorting) {
                onSorting(index, true);         
                setAscending(true)
            } else {
                onSorting(index, !ascending);         
                setAscending(!ascending);
            }      
        }
        setActiveSorting(true);
    }

    return (
        <Styled.Cell>
            <span>{item}</span>
            {hasSort && 
                <Styled.Sort onClick={() =>sorting(index)}>
                    {!activeSorting && <BiSortAlt2 color='#a1a1a1' fontSize={20} />}
                    {activeSorting && ascending && <BiSortUp fontSize={20} />}                            
                    {activeSorting && !ascending && <BiSortDown fontSize={20} />}                            
                </Styled.Sort>
            }
        </Styled.Cell>
    );
}

export default TableHeaderCell;