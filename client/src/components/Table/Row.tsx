import { useState } from 'react';
import * as Styled from './Table.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

interface RowProps {
    id: number;
    rowData: object;
    title: string[];
    hasEdit?: boolean;
    hasDelete?: boolean;
    onDeleteRow?: (id: number) => void;
    onEditRow?: (data: any) => void;
}

const Row = ({ id, rowData, hasEdit = false, hasDelete = false, onDeleteRow, onEditRow }: RowProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const values = Object.values(rowData);
    const keys = Object.keys(rowData);
    console.log(keys, values);

    let columnCount = Math.floor(values.length);
    columnCount = hasEdit ? columnCount + 1 : columnCount;
    columnCount = hasDelete ? columnCount + 1 : columnCount;

    const onEditItem = () => {
        const data = {
            id: 7,
            deviceName: 'Updated',
            ownerName: 'Updated',
            deviceType: 'Smartphone',
            batteryStatus: 10
        }

        setOpenModal(true);
    }   

    return (
        <Styled.Row columns={columnCount} columnsPercentage={100/columnCount}>
            {values.map(cell => <Styled.Cell>{cell}</Styled.Cell>)}
            {hasEdit && (
                <Styled.Cell align='center'>
                    <Styled.Link onClick={() => setOpenModal(true)}><AiFillEdit /></Styled.Link>
                </Styled.Cell>
            )}

            {hasDelete && (
                <Styled.Cell align='center'>
                    <Styled.Link onClick={() => onDeleteRow && onDeleteRow(id)}><AiFillDelete /></Styled.Link>
                </Styled.Cell>
            )}

            {openModal && (
				<Modal width={500} height={300} onCancle={() => setOpenModal(false)} onEdit={() => onEditRow}>
					{values.map((value, idx) => <p>{keys[idx]}:<Input value={value} /></p>)}
                    

                    
				</Modal>
			)}
        </Styled.Row>
    );
}

export default Row;