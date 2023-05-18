import * as Styled from './Table.styles';
import Row from './Row';
import TableHaeder from './TableHeader';

interface TableProps {
    rows: any[];
    headers: string[];
}

const Table = ({ rows, headers }: TableProps) => {
    return (
        <Styled.Table>
            <TableHaeder data={headers} hasSort />

            <Styled.TableBody>
                {rows.map(row => {
                    if(typeof row === 'object') {
                        return (<Row rowData={Object.values(row)} />);
                    }

                    return (<Row rowData={row} />);
                })}
            </Styled.TableBody>
        </Styled.Table>
    )
}

export default Table;