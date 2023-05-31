import { useState } from 'react';
import * as Styled from './DeviceTable.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { ReformedDeviceDataType, DeviceDetailType } from '../../../types/device.type';
import DialogConfirmation from '../../molecules/DialogConfirmation/DialogConfirmation';

interface RowProps {
    id: number;
    rowData: ReformedDeviceDataType;
    toggleModal: (toggle: number | null) => void;
    onDeleteRow: (id: number) => void;
}

const Row = ({ id, rowData, onDeleteRow, toggleModal }: RowProps) => {
    const [openDialog, setOpenDialog] = useState(false);
    const row: DeviceDetailType[] = Object.values(rowData);

    const deleteItem = (id: number) => {
        onDeleteRow(id);
        setOpenDialog(false);
    }

    return (
        <Styled.Row>
            {row.map((cell, idx) => 
                <Styled.Cell 
                    key={idx} 
                    justifyContent={cell.type === 'number' ? 'flex-end' : 'flex-start'}
                >
                    {cell.value}{cell.subfix}
                </Styled.Cell>
            )}
            <Styled.Cell justifyContent="flex-end">
                <Styled.Link onClick={() => toggleModal(rowData.id.value as number)}><AiFillEdit /></Styled.Link>
            </Styled.Cell>

            <Styled.Cell justifyContent="flex-end">
                <Styled.Link onClick={() => setOpenDialog(true)}><AiFillDelete /></Styled.Link>
            </Styled.Cell>

            {openDialog && (
                <DialogConfirmation 
                    text="Are you sure you want to delete this item?" 
                    onCancle={() => setOpenDialog(false)} 
                    onConfirm={() => deleteItem(id)}
                />
            )}
        </Styled.Row>
    );
}

export default Row;