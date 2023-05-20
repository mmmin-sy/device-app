import { useEffect, useState } from 'react';
import * as Styled from './DeviceList.styles';
import Table from '../Table/Table';
import { getList, addItem, deleteItem, updateItem } from './../../api/DeviceApi';

export interface DeviceType {
	id: number;
	deviceName: string;
	ownerName: string;
	deviceType: 'Smartphone' | 'Tablet' | 'Camera';
	batteryStatus: number;
}

const DeviceList = () => {
    const [data, setData] = useState<DeviceType[] | null>(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getDeviceList();
	}, [])

	const getDeviceList = () => {
		getList()
		.then(data => setData(data))
		.catch(error => setError(error))
	}

	const addDevice = () => {
		const maxId = data ? Math.max(...data.map(item => item.id)) : 0;

		addItem({
			id: maxId + 1,
			deviceName: 'Apple',
			ownerName: 'Susan',
			deviceType: 'Smartphone',
			batteryStatus: 10
		})
		.then(data => setData(data));
	}
	
	const updateDevice = (updateData: DeviceType) => {
		const availableData = data?.find(item => item.id === updateData.id) ?? undefined;
		if(availableData) {
			updateItem(updateData)
			.then(data => setData(data))
			.catch(error => setError(error));
		}
	}

	const deleteDevice = (id: number) => {
		deleteItem(id)
		.then(data => setData(data));
	}

    return (
        <div className={Styled.Container}>
            <div>
                {data
                    ? <Table rows={data} headers={['id', 'Device name', 'Device type', 'Owner name', 'Batter status']} />
                    : 'No device item'
                }
            </div>

			{error && <span>Error!</span>}	
            <button onClick={() => addDevice()}>Add</button>
        </div>
    );
}

export default DeviceList;