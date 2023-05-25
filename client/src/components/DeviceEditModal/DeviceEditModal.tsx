import { useState, useRef, useEffect } from 'react';
import * as Styled from './DeviceEditModal.styles';
import Modal from '../Modal/Modal';
import { DeviceType, DeviceDetailType } from '../types';
import Input from '../Input/Input';
import SelectBox from '../SelectBox/SelectBox';

interface DeviceEditModalProps {
    data: any[];
    toggleModal: (toggle: number | null) => void;
    onEditItem: (data: DeviceType) => void;
}

const DeviceEditModal = ({ toggleModal, data, onEditItem }: DeviceEditModalProps ) => {
    const [height, setHeight] = useState<number>(0);
    const [deviceName, setDeviceName] = useState(data[1]);
    const [deviceType, setDeviceType] = useState(data[2]);
    const [ownerName, setOwnerName] = useState(data[3]);
    const [batteryStatus, setBatterStatus] = useState(data[4]);

    const ref = useRef<any>();

    useEffect(() => {
        setHeight(ref?.current.offsetHeight)
    }, [ref]);

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
                height={height} 
                onCancle={() => toggleModal(null)}
                onSave={() => onEdit()}
            >
                <div ref={ref}>
                    <Styled.Form>
                        <Styled.Label>Id</Styled.Label>
                        <Styled.Label>{data[0]}</Styled.Label>
                    </Styled.Form>

                    <Styled.Form>
                        <Styled.Label>Device Name</Styled.Label>
                        <Input value={deviceName} onChange={(event) => setDeviceName(event.target.value)} />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Device Type</Styled.Label>
                        <SelectBox 
                            options={['Tablet', 'Camera', 'Smartphone']}
                            onChange={(event) => setDeviceType(event.target.value)} 
                            selectedValue={deviceType}
                        />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Owner Name</Styled.Label>
                        <Input value={ownerName} onChange={(event) => setOwnerName(event.target.value)} />
                    </Styled.Form>
                    <Styled.Form>
                        <Styled.Label>Batter Status</Styled.Label>
                        <Input 
                            value={batteryStatus} 
                            onChange={(event) => setBatterStatus(event.target.value)} 
                            validateRule="^[0-9]+$" 
                            errorMessage="Please enter only number." 
                        />
                    </Styled.Form>
                </div>
            </Modal>
        </Styled.Container>
    )
}

export default DeviceEditModal;