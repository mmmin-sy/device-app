import * as Styled from './Table.styles';

interface RowProps {
    rowData: React.ReactNode[];
}

const Row = ({ rowData }: RowProps) => {
    const columnCount = Math.floor(rowData.length);

    return (
        <Styled.Row columns={columnCount} columnsPercentage={100/columnCount}>
            {rowData.map(cell => <Styled.Cell>{cell}</Styled.Cell>)}
        </Styled.Row>
    );
}

export default Row;