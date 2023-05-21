import * as Styled from './Table.styles';
import TableHeaderCell from './TableHeaderCell';

interface TableHeader {
    data: string[];
    hasSort?: boolean;
    hasEdit?: boolean;
    hasDelete?: boolean;
    rowGridColumns: string;
    onSorting?: (index: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;
}

const TableHeader = ({ data, hasSort = false, hasEdit = false, hasDelete = false, rowGridColumns, onSorting, currentAscendingIndex}: TableHeader) => {
    return (
        <Styled.TableHeader gridTemplateColumns={rowGridColumns}>
            {data.map((item, idx) => 
                <TableHeaderCell 
                    key={idx}
                    index={idx} 
                    item={item} 
                    hasSort={hasSort} 
                    onSorting={(index: number, ascending: boolean) => onSorting && onSorting(index, ascending)} 
                    currentAscendingIndex={currentAscendingIndex}
                />
                
            )}
        </Styled.TableHeader>  
    );
}

export default TableHeader; 