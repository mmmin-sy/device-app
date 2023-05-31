import { useState, useEffect } from 'react';
import * as Styled from './DeviceTable.styles';
import { BiSortAlt2, BiSortDown, BiSortUp } from 'react-icons/bi';

interface TableHeaderCellProps {
    index: number;
    item: any;
    onSorting?: (index: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;
    justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

const TableHeaderCell = ({ index, item, onSorting, currentAscendingIndex, justifyContent ='flex-start' }: TableHeaderCellProps) => {
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
        <Styled.Cell header={true} fontSize={13} justifyContent={justifyContent}>
            <span>{item}</span>
            {onSorting && (
                <Styled.Sort onClick={() =>sorting(index)}>
                    {!activeSorting && <BiSortAlt2 color='#a1a1a1' fontSize={20} />}
                    {activeSorting && ascending && <BiSortUp fontSize={20} />}                            
                    {activeSorting && !ascending && <BiSortDown fontSize={20} />}                            
                </Styled.Sort>
            )}
        </Styled.Cell>
    );
}

export default TableHeaderCell;