import * as Styled from './Table.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface RowProps {
    id: number;
    rowData: object;
    title: string[];
    toggleModal: (toggle: number | null) => void;
    onDeleteRow: (id: number) => void;
}

const Row = ({ id, rowData, onDeleteRow, toggleModal }: RowProps) => {
    const values = Object.values(rowData);

    return (
        <Styled.Row>
            {values.map((cell, idx) => <Styled.Cell key={idx}>{cell}</Styled.Cell>)}
            <Styled.Cell justifyContent="flex-end">
                <Styled.Link onClick={() => toggleModal(id)}><AiFillEdit /></Styled.Link>
            </Styled.Cell>

            <Styled.Cell justifyContent="flex-end">
                <Styled.Link onClick={() => onDeleteRow(id)}><AiFillDelete /></Styled.Link>
            </Styled.Cell>
        </Styled.Row>
    );
}

export default Row;