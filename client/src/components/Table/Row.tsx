import * as Styled from './Table.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface RowProps {
    id: number;
    rowData: object;
    title: string[];
    hasEdit?: boolean;
    hasDelete?: boolean;
    rowGridColumns: string;
    toggleModal?: (toggle: number | null) => void;
    onDeleteRow?: (id: number) => void;
}

const Row = ({ id, rowData, hasEdit = false, hasDelete = false, rowGridColumns, onDeleteRow, toggleModal }: RowProps) => {
    const values = Object.values(rowData);

    return (
        <Styled.Row gridTemplateColumns={rowGridColumns}>
            {values.map((cell, idx) => <Styled.Cell key={idx}>{cell}</Styled.Cell>)}
            {hasEdit && (
                <Styled.Cell justifyContent="flex-end">
                    <Styled.Link onClick={() => toggleModal && toggleModal(id)}><AiFillEdit /></Styled.Link>
                </Styled.Cell>
            )}

            {hasDelete && (
                <Styled.Cell justifyContent="flex-end">
                    <Styled.Link onClick={() => onDeleteRow && onDeleteRow(id)}><AiFillDelete /></Styled.Link>
                </Styled.Cell>
            )}
        </Styled.Row>
    );
}

export default Row;