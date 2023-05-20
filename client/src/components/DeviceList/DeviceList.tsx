import { useEffect, useState } from 'react';
import * as Styled from './DeviceList.styles';
import Table from '../Table/Table';
import { getList, addItem, deleteItem, updateItem } from './../../api/DeviceApi';
import DeviceEditModal from '../DeviceEditModal/DeviceEditModal';
import DeviceAddModal from '../DeviceAddModal/DeviceAddModal';

export interface DeviceType {
	id: number;
	deviceName: string;
	deviceType: 'Smartphone' | 'Tablet' | 'Camera';
	ownerName: string;
	batteryStatus: number;
}

export interface DeviceAddFormType {
	deviceName: string;
	deviceType: 'Smartphone' | 'Tablet' | 'Camera';
	ownerName: string;
	batteryStatus: number;
}

const DeviceList = () => {
    const [data, setData] = useState<DeviceType[]>([]);
	const [error, setError] = useState(null);
	const [openAddModal, setOpenAddModal] = useState<boolean>(false);
	const [openEditModal, setOpenEditModal] = useState<number | null>(null);
	const [currentAscending, setCurrentAscending] = useState<boolean | null>(null);
	const [currentAscendingIndex, setCurrentAscendingIndex] = useState<number | null>(null);

	useEffect(() => {
		getDeviceList();
	}, [])

	const getDeviceList = () => {
		getList()
		.then(data => setData(data))
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
			setData(data)
			setOpenAddModal(false)
		});
	}
	
	const editDevice = (updateData: DeviceType) => {		
		const availableData = data?.find(item => item.id === updateData.id) ?? undefined;

		if(availableData) {
			updateItem(updateData)
			.then(data => {
				setData(data)
				setOpenEditModal(null)
			})
			.catch(error => setError(error));
		}
	}

	const deleteDevice = (id: number) => {
		deleteItem(id)
		.then(data => setData(data));
	}

	const getRowValues = (id: number) => {
		const row = data.find(item => item.id === id) ?? {};
		const values: (string|number)[] = Object.values(row);
		return  values;
	}

	const onSorting = (index: number, ascending: boolean) => {
		setCurrentAscending(ascending);
		setCurrentAscendingIndex(index);

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
		console.log('#', data)
		
	}

    return (
        <div className={Styled.Container}>			
            <div>
                {data
                    ? (
						<Table 
							rows={data} 
							headers={['Id', 'Device Name', 'Device Type', 'Owner Name', 'Batter Status']} 
							hasSort 
							hasEdit 
							hasDelete 
							toggleModal={(toggle: number | null) => setOpenEditModal(toggle)}
							onDeleteRow={deleteDevice}
							onSorting={(idx: number, ascending: boolean) => onSorting(idx, ascending)}
							currentAscendingIndex={currentAscendingIndex}
						/>
					) 
                    : 'No device item'
                }
            </div>

			{error && <span>Error!</span>}	
            <button onClick={() => setOpenAddModal(true)}>New Device</button>

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
        </div>
    );
}

export default DeviceList;