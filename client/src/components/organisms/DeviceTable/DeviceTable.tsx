import * as Styled from './DeviceTable.styles';
import Row from './DeviceTableBodyRow';
import TableHeader from './DeviceTableHeader';

interface TableProps {
    rows: any[];
    headers: string[];
    toggleModal: (toggle: number | null) => void;
    onDeleteRow: (id: number) => void;
    onSorting: (idx: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;    
}

const Table = ({ 
    rows, 
    headers, 
    toggleModal, 
    onDeleteRow, 
    onSorting, 
    currentAscendingIndex 
}: TableProps) => {
    return (
        <Styled.Table>
            <TableHeader 
                data={headers} 
                onSorting={(idx: number, ascending: boolean) => onSorting(idx, ascending)}
                currentAscendingIndex={currentAscendingIndex}
            />

            <Styled.TableBody>
                {rows.map((row, key) => (
                    <Row 
                        key={key}
                        rowData={row} 
                        id={row.id.value} 
                        toggleModal={(toggle) => toggleModal(toggle)}
                        onDeleteRow={(id) => onDeleteRow(id)}
                    />
                ))}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default Table;