import { useState, useRef, useEffect } from 'react';
import * as Styled from './DeviceAddModal.styles';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';

interface DeviceAddModalProps {
    toggleModal: (toggle: boolean) => void;
    onAddItem: (data: any) => void;
}
const DeviceAddModal = ({ toggleModal, onAddItem }: DeviceAddModalProps) => {
    const [height, setHeight] = useState<number>(0);
    const [deviceName, setDeviceName] = useState<any>();
    const [deviceType, setDeviceType] = useState<any>();
    const [ownerName, setOwnerName] = useState<any>();
    const [batteryStatus, setBatterStatus] = useState<any>();
    const ref = useRef<any>();

    const onSave = () => {
        const newData = {
            deviceName: deviceName ?? '',
			deviceType: deviceType ?? 'Tablet',
            ownerName: ownerName ?? '',
			batteryStatus: batteryStatus ?? 0
        }

        onAddItem(newData);
    }

    useEffect(() => {
        setHeight(ref?.current.offsetHeight)
    }, [ref]);

    return (
        <Styled.Container>
             <Modal 
                width={500} 
                height={height}
                onCancle={() => toggleModal(false)}
                onSave={() => onSave()}
            >
                <div ref={ref}>
                    <Styled.Form>
                        <Styled.Label>Device Name</Styled.Label>
                        <Input value={deviceName} onChange={(event) => setDeviceName(event.target.value)} />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Device Type</Styled.Label>
                        <Input value={deviceType} onChange={(event) => setDeviceType(event.target.value)} />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Owner Name</Styled.Label>
                        <Input value={ownerName} onChange={(event) => setOwnerName(event.target.value)} />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Batter Status</Styled.Label>
                        <Input value={batteryStatus} onChange={(event) => setBatterStatus(event.target.value)} />
                    </Styled.Form>
                </div>
            </Modal>
        </Styled.Container>
    );
}

export default DeviceAddModal;