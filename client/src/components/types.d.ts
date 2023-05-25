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

export interface ReformedDeviceDataType {
	id: DeviceDetailType;
	deviceName: DeviceDetailType;
	deviceType: DeviceDetailType;
	ownerName: DeviceDetailType;
	batteryStatus: DeviceDetailType;
}

export interface DeviceDetailType {
	value: string | number;
	type: string;
	subfix?: string;
}