import { useState } from 'react';
import * as Styled from './DeviceEditModal.styles';
import Modal from '../Modal/Modal';
import { DeviceType } from '../DeviceList/DeviceList';
import Input from '../Input/Input';

interface DeviceEditModalProps {
    data: any[];
    toggleModal: (toggle: number | null) => void;
    onEditItem: (data: DeviceType) => void;
}

const DeviceEditModal = ({ toggleModal, data, onEditItem }: DeviceEditModalProps ) => {
    const [deviceName, setDeviceName] = useState(data[1]);
    const [deviceType, setDeviceType] = useState(data[2]);
    const [ownerName, setOwnerName] = useState(data[3]);
    const [batteryStatus, setBatterStatus] = useState(data[4]);

    const onEdit = () => {
        const updatedData = {
			id: data[0],
			deviceName: deviceName,
			deviceType: deviceType,
            ownerName: ownerName,
			batteryStatus: batteryStatus
		}
        onEditItem(updatedData);
    }

    return (
        <Styled.Container>
            <Modal 
                width={500} 
                height={300} 
                onCancle={() => toggleModal(null)}
                onSave={() => onEdit()}
            >
                <Styled.FormContainer>
                    <div>
                        <div>
                            <div>Id</div>
                            <div><Input disabled value={data[0]} /></div>
                        </div>
                        
                        <div>
                            <div>Device Name</div>
                            <div><Input value={deviceName} onChange={(event) => setDeviceName(event.target.value)} /></div>
                        </div>
                        <div>
                            <div>Device Type</div>
                            <div><Input value={deviceType} onChange={(event) => setDeviceType(event.target.value)} /></div>
                        </div>
                        <div>
                            <div>Owner Name</div>
                            <div><Input value={ownerName} onChange={(event) => setOwnerName(event.target.value)} /></div>
                        </div>
                        <div>
                            <div>Batter Status</div>
                            <div><Input value={batteryStatus} onChange={(event) => setBatterStatus(event.target.value)} /></div>
                        </div>
                    </div>
                </Styled.FormContainer>
            </Modal>
        </Styled.Container>
    )
}

export default DeviceEditModal;