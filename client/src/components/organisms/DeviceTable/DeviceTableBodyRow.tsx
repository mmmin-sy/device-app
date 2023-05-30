import * as Styled from './DeviceTable.styles';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { ReformedDeviceDataType, DeviceDetailType } from '../../../types/device.type';

interface RowProps {
    id: number;
    rowData: ReformedDeviceDataType;
    toggleModal: (toggle: number | null) => void;
    onDeleteRow: (id: number) => void;
}

const Row = ({ id, rowData, onDeleteRow, toggleModal }: RowProps) => {
    const row: DeviceDetailType[] = Object.values(rowData);

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
                <Styled.Link onClick={() => onDeleteRow(id)}><AiFillDelete /></Styled.Link>
            </Styled.Cell>
        </Styled.Row>
    );
}

export default Row;