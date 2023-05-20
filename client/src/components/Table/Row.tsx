import * as Styled from './Table.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface RowProps {
    id: number;
    rowData: object;
    title: string[];
    hasEdit?: boolean;
    hasDelete?: boolean;
    toggleModal?: (toggle: number | null) => void;
    onDeleteRow?: (id: number) => void;
}

const Row = ({ id, rowData, hasEdit = false, hasDelete = false, onDeleteRow, toggleModal }: RowProps) => {
    
    const values = Object.values(rowData);
    const keys = Object.keys(rowData);

    let columnCount = Math.floor(values.length);
    columnCount = hasEdit ? columnCount + 1 : columnCount;
    columnCount = hasDelete ? columnCount + 1 : columnCount;

    return (
        <Styled.Row columns={columnCount} columnsPercentage={100/columnCount}>
            {values.map((cell, idx) => <Styled.Cell key={idx}>{cell}</Styled.Cell>)}
            {hasEdit && (
                <Styled.Cell align='center'>
                    <Styled.Link onClick={() => toggleModal && toggleModal(id)}><AiFillEdit /></Styled.Link>
                </Styled.Cell>
            )}

            {hasDelete && (
                <Styled.Cell align='center'>
                    <Styled.Link onClick={() => onDeleteRow && onDeleteRow(id)}><AiFillDelete /></Styled.Link>
                </Styled.Cell>
            )}
        </Styled.Row>
    );
}

export default Row;