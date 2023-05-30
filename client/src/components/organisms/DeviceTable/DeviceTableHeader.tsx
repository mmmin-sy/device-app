import * as Styled from './DeviceTable.styles';
import TableHeaderCell from './DeviceTableHeaderCell';

interface TableHeader {
    data: string[];
    onSorting: (index: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;
}

const TableHeader = ({ data, onSorting, currentAscendingIndex}: TableHeader) => {
    return (
        <Styled.TableHeader>
            {data.map((item, idx) => 
                <TableHeaderCell 
                    key={idx}
                    index={idx} 
                    item={item} 
                    onSorting={(index: number, ascending: boolean) => onSorting(index, ascending)} 
                    currentAscendingIndex={currentAscendingIndex}
                />
            )}
        </Styled.TableHeader>  
    );
}

export default TableHeader; 