import * as Styled from './Table.styles';
import Row from './Row';
import TableHeader from './TableHeader';

interface TableProps {
    rows: any[];
    headers: string[];
    hasSort?: boolean;
    hasEdit?: boolean;
    hasDelete?: boolean;
    onDeleteRow?: (id: number) => void;
    onEditRow?: (data: any) => void;
}

const Table = ({ rows, headers, hasSort = false, hasEdit = false, hasDelete = false, onDeleteRow, onEditRow }: TableProps) => {
    return (
        <Styled.Table>
            <TableHeader data={headers} hasSort={hasSort} hasEdit={hasEdit} hasDelete={hasDelete} />

            <Styled.TableBody>
                {rows.map(row => (
                    <Row 
                        rowData={row} 
                        title={headers}
                        id={row.id} 
                        hasEdit={hasEdit} 
                        hasDelete={hasDelete} 
                        onDeleteRow={(id) => onDeleteRow && onDeleteRow(id)}
                        onEditRow={(data) => onEditRow && onEditRow(data)}
                    />
                ))}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default Table;