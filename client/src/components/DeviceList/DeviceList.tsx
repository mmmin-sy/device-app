import React, { useEffect, useState, ReactNode, FC } from 'react';
import * as Styled from './DeviceList.styles';

interface DeviceType {
	deviceName: string;
	ownerName: string;
	deviceType: 'Smartphone' | 'Tablet' | 'Camera';
	batteryStatus: number;
}

const DeviceList: React.FC = () => {
    const [data, setData] = useState<DeviceType[] | null>(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getList();
	}, []);

	const getList = () => {
		return fetch('/list')
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => setError(error))
	}

	const updateList = (data: DeviceType) => {
		return fetch('/update',
			{
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			}
		)
	}

	const addDevice = () => {
		updateList({
			deviceName: 'Apple',
			ownerName: 'Susan',
			deviceType: 'Smartphone',
			batteryStatus: 10
		})
			.then((res) => res.json())
			.then(data => setData(data));
	}

    return (
        <div className={Styled.Container}>
            <div>
                {data
                    ? data.map(item => item.ownerName)
                    : 'No device item'
                }
            </div>
            <button onClick={() => addDevice()}>Add!</button>
        </div>
    );
}

export default DeviceList;