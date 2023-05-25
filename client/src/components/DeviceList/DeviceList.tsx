import { useEffect, useState } from 'react';
import * as Styled from './DeviceList.styles';
import Table from '../Table/Table';
import { getList, addItem, deleteItem, updateItem } from './../../api/DeviceApi';
import DeviceEditModal from '../DeviceEditModal/DeviceEditModal';
import DeviceAddModal from '../DeviceAddModal/DeviceAddModal';
import Button from '../Button/Button';
import { DeviceType, DeviceDetailType, DeviceAddFormType, ReformedDeviceDataType } from '../types';

const DeviceList = () => {
    const [data, setData] = useState<DeviceType[]>([]);
	const [error, setError] = useState(null);
	const [openAddModal, setOpenAddModal] = useState<boolean>(false);
	const [openEditModal, setOpenEditModal] = useState<DeviceDetailType | null>(null);
	const [currentAscending, setCurrentAscending] = useState<boolean | null>(null);
	const [currentAscendingIndex, setCurrentAscendingIndex] = useState<number | null>(null);

	useEffect(() => {
		getDeviceList();
	}, [])

	const getDeviceList = () => {
		getList()
		.then(data => {
			
			setData(data)
		})
		.catch(error => setError(error))
	}

	const addDevice = (newData: DeviceAddFormType) => {
		const maxId = data ? Math.max(...data.map(item => item.id)) : 0;

		addItem({
			id: maxId + 1,
			deviceName: newData.deviceName,
			deviceType: newData.deviceType,
			ownerName: newData.ownerName,
			batteryStatus: newData.batteryStatus
		})
		.then(data => {
			getDeviceList();
			setOpenAddModal(false);
		})
		.catch(error => setError(error))
	}
	
	const editDevice = (updateData: DeviceType) => {		
		const availableData = data?.find(item => item.id === updateData.id) ?? undefined;

		if(availableData) {
			updateItem(updateData)
			.then(data => {
				getDeviceList();
				setOpenEditModal(null);
			})
			.catch(error => setError(error));
		}
	}

	const deleteDevice = (id: number) => {
		deleteItem(id)
		.then(data => getDeviceList())
		.catch(error => setError(error));

	}

	const getRowValues = (id: DeviceDetailType) => {
		const selectedId = id.value;
		const row = data.find(item => item.id === id.value) ?? {};
		const values: (string|number)[] = Object.values(row);
		return  values;
	}

	const onSorting = (index: number, ascending: boolean) => {
		setCurrentAscendingIndex(index);
		setCurrentAscending(ascending);

		const sampleObj = data[0];
		const sortingKey = Object.keys(sampleObj)[index];

		if(sortingKey === 'id'){ // number
			data.sort((a, b) => a.id - b.id)			
		} else if(sortingKey === 'batteryStatus') {
			data.sort((a, b) => a.batteryStatus - b.batteryStatus)
		} else if(sortingKey === 'deviceName') {
			data.sort((a, b) => a.deviceName.localeCompare(b.deviceName))
		} else if(sortingKey === 'deviceType') {
			data.sort((a, b) => a.deviceType.localeCompare(b.deviceType))
		} else if(sortingKey === 'ownerName') {
			data.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
		}

		if (!ascending){
			data.reverse();
		} 
	}

	const reformedData = (): ReformedDeviceDataType[] => {
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
                {data
                    ? (
						<Table 
							rows={reformedData()} 
							headers={['Id', 'Device Name', 'Device Type', 'Owner Name', 'Batter Status']}
							toggleModal={(toggle: DeviceDetailType | null) => setOpenEditModal(toggle)}
							onDeleteRow={deleteDevice}
							onSorting={(idx: number, ascending: boolean) => onSorting(idx, ascending)}
							currentAscendingIndex={currentAscendingIndex}
							currentAscending={currentAscending}
						/>
					) 
                    : 'No device item'
                }
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
					toggleModal={(toggle: DeviceDetailType | null) => setOpenEditModal(toggle)} 
					onEditItem={editDevice}
				/>
			)}
        </div>
    );
}

export default DeviceList;