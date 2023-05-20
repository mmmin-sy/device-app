import * as Styled from './Table.styles';
import Row from './Row';
import TableHeader from './TableHeader';

interface TableProps {
    rows: any[];
    headers: string[];
    hasSort?: boolean;
    hasEdit?: boolean;
    hasDelete?: boolean;
    toggleModal?: (toggle: number | null) => void;
    onDeleteRow?: (id: number) => void;
    onSorting?: (idx: number, ascending: boolean) => void;
    currentAscendingIndex?: number | null;
}

const Table = ({ 
    rows, 
    headers, 
    hasSort = false, 
    hasEdit = false, 
    hasDelete = false, 
    toggleModal, 
    onDeleteRow, 
    onSorting, 
    currentAscendingIndex 
}: TableProps) => {
    console.log('##rows##', rows, headers)
    return (
        <Styled.Table>
            <TableHeader 
                data={headers} 
                hasSort={hasSort} 
                hasEdit={hasEdit} 
                hasDelete={hasDelete} 
                onSorting={(idx: number, ascending: boolean) => onSorting && onSorting(idx, ascending)}
                currentAscendingIndex={currentAscendingIndex}
            />

            <Styled.TableBody>
                {rows.map(row => (
                    <Row 
                        rowData={row} 
                        title={headers}
                        id={row.id} 
                        hasEdit={hasEdit} 
                        hasDelete={hasDelete} 
                        toggleModal={(toggle) => toggleModal && toggleModal(toggle)}
                        onDeleteRow={(id) => onDeleteRow && onDeleteRow(id)}
                    />
                ))}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default Table;