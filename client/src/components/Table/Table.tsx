import * as Styled from './Table.styles';
import Row from './Row';
import TableHeader from './TableHeader';

interface TableProps {
    rows: any[];
    headers: string[];
    toggleModal: (toggle: number | null) => void;
    onDeleteRow: (id: number) => void;
    onSorting: (idx: number, ascending: boolean) => void;
    currentAscending?: boolean | null;
    currentAscendingIndex?: number | null;    
}

const Table = ({ 
    rows, 
    headers, 
    toggleModal, 
    onDeleteRow, 
    onSorting, 
    currentAscending,
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
                {rows.map(row => (
                    <Row 
                        rowData={row} 
                        title={headers}
                        id={row.id} 
                        toggleModal={(toggle) => toggleModal(toggle)}
                        onDeleteRow={(id) => onDeleteRow(id)}
                    />
                ))}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default Table;