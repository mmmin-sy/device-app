import { useState } from 'react';
import * as Styled from './DeviceAddModal.styles';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

interface DeviceAddModalProps {
    toggleModal: (toggle: boolean) => void;
    onAddItem: (data: any) => void;
}
const DeviceAddModal = ({ toggleModal, onAddItem }: DeviceAddModalProps) => {
    const [deviceName, setDeviceName] = useState<any>();
    const [deviceType, setDeviceType] = useState<any>();
    const [ownerName, setOwnerName] = useState<any>();
    const [batteryStatus, setBatterStatus] = useState<any>();

    const onSave = () => {
        const newData = {
            deviceName: deviceName ?? '',
			deviceType: deviceType ?? 'Tablet',
            ownerName: ownerName ?? '',
			batteryStatus: batteryStatus ?? 0
        }

        onAddItem(newData);
    }

    return (
        <Styled.Container>
             <Modal 
                width={500} 
                height={300} 
                onCancle={() => toggleModal(false)}
                onSave={() => onSave()}
            >
                <Styled.FormContainer>
                    <div>
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
    );
}

export default DeviceAddModal;