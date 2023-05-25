import axios from 'axios';
import { DeviceType } from '../components/types';

export const getList = () => {
    return axios.get('/api/device')
    .then(data => data.data)
    .catch(error => error)
}

export const addItem = (data: DeviceType) => {
    return axios.post('/api/device', data)
    .then(data => data.data)
    .catch(error => error)
}

export const deleteItem = (id: number)  => {
    return axios.delete('/api/device/' + id)
    .then(data => data.data)
    .catch(error => error)
}

export const updateItem = (data: DeviceType)  => {
    return axios.put('/api/device/' + data.id, data)
    .then(data => data.data)
    .catch(error => error);
}
