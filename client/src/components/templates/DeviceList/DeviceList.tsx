import { useEffect, useState } from 'react';
import * as Styled from './DeviceList.styles';
import Table from '../../organisms/DeviceTable/DeviceTable';
import { getList, addItem, deleteItem, updateItem } from '../../../api/DeviceApi';
import DeviceEditModal from '../../organisms/DeviceEditModal/DeviceEditModal';
import DeviceAddModal from '../../organisms/DeviceAddModal/DeviceAddModal';
import Button from '../../atoms/Button/Button';
import { 
	DeviceType, 
	DeviceAddFormType, 
	ReformedDeviceDataType 
} from '../../../types/device.type';
import Pagination from '../../molecules/Pagination/Pagination';

const DeviceList = () => {
    const [data, setData] = useState<DeviceType[]>([]);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [orderBy, setOrderBy] = useState('id');
	const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
	const [total, setTotal] = useState(0);
	const [openAddModal, setOpenAddModal] = useState<boolean>(false);
	const [openEditModal, setOpenEditModal] = useState<number | null>(null);
	const [currentAscendingIndex, setCurrentAscendingIndex] = useState<number | null>(null);

	useEffect(() => {
		getDeviceList(currentPage, orderBy, order);
	}, [currentPage])

	const getDeviceList = (page: number, orderBy: string, order: string) => {
		getList(page, orderBy, order)
		.then(data => {
			setData(data.rows);
			setTotal(data.count);
		})
		.catch(error => setError(error))
	}

	const addDevice = (newData: DeviceAddFormType) => {
		setCurrentPage(1);
		setOrderBy('id');
		setOrder('ASC');
		setCurrentAscendingIndex(0);

		addItem({
			deviceName: newData.deviceName,
			deviceType: newData.deviceType,
			ownerName: newData.ownerName,
			batteryStatus: newData.batteryStatus
		})
		.then(data => {	
			getDeviceList(1, 'id', 'ASC');
			setOpenAddModal(false);
		})
		.catch(error => setError(error))
	}
	
	const editDevice = (updateData: DeviceType) => {		
		const availableData = data?.find(item => item.id === updateData.id) ?? undefined;

		if(availableData) {
			updateItem(updateData)
			.then(data => {
				getDeviceList(currentPage, orderBy, order);
				setOpenEditModal(null);
			})
			.catch(error => setError(error));
		}
	}

	const deleteDevice = (id: number) => {
		setCurrentAscendingIndex(0);
		setCurrentPage(1);
		setOrderBy('id');
		setOrder('ASC');

		deleteItem(id)
		.then(data =>getDeviceList(1, 'id', 'ASC'))
		.catch(error => setError(error));

	}

	const getRowValues = (id: number) => {
		const row = data.find(item => item.id === id) ?? {};
		const values: (string|number)[] = Object.values(row);
		return  values;
	}

	const onSorting = (index: number, ascending: boolean) => {
		
		setCurrentAscendingIndex(index);
		
		const sampleObj = data[0];
		const sortingKey = Object.keys(sampleObj)[index];
		setCurrentPage(1);
		setOrderBy(sortingKey);
		setOrder(ascending ? 'ASC' : 'DESC');
		getDeviceList(1, sortingKey, ascending ? 'ASC' : 'DESC');
	}

	const reformedData = (): ReformedDeviceDataType[] => {
		if(!data) {
			return []
		}
		const newData = data.map(item => {
			return {
				id: {
					value: item.id,
					type: 'number'
				},
				deviceName: {
					value: item.deviceName,
					type: 'string'
				},
				deviceType: {
					value: item.deviceType,
					type: 'string'
				},
				ownerName: {
					value: item.ownerName,
					type: 'string'
				},
				batteryStatus: {
					value: item.batteryStatus,
					type: 'number',
					subfix: '%'
				},
			}
		})
		return newData;
	}

    return (
        <div className={Styled.Container}>			
            <div>
				<Table 
					rows={reformedData()} 
					headers={['Id', 'Device Name', 'Device Type', 'Owner Name', 'Batter Status']}
					toggleModal={(toggle: number | null) => setOpenEditModal(toggle)}
					onDeleteRow={deleteDevice}
					onSorting={(idx: number, ascending: boolean) => onSorting(idx, ascending)}
					currentAscendingIndex={currentAscendingIndex}
				/>
            </div>

			{error && <span>Error!</span>}	
            <Button onClick={() => setOpenAddModal(true)}>New Device</Button>

			{openAddModal && (
				<DeviceAddModal 
					toggleModal={(toggle: boolean) => setOpenAddModal(toggle)} 
					onAddItem={addDevice}
				/>
			)}

			{openEditModal !== null && data && (
				<DeviceEditModal 
					data={getRowValues(openEditModal)}
					toggleModal={(toggle: number | null) => setOpenEditModal(toggle)} 
					onEditItem={editDevice}
				/>
			)}

			{data.length > 0 && (
				<Pagination 
					totalCount={total}
					currentPage={currentPage}
					onChangePage={(page: number) => setCurrentPage(page)}
				/>
			)}
        </div>
    );
}

export default DeviceList;