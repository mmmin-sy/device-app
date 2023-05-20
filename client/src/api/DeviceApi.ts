import axios from 'axios';
import { DeviceType } from '../components/DeviceList/DeviceList';

export const getList = () => {
    return axios.get('/list')
    .then(data => data.data)
    .catch(error => error)
}

export const addItem = (data: DeviceType) => {
    return axios.post('/add', data)
    .then(data => data.data)
    .catch(error => error)
}

export const deleteItem = (id: number)  => {
    return axios.delete('/' + id)
    .then(data => data.data)
    .catch(error => error)
}

export const updateItem = (data: DeviceType)  => {
    return axios.post('/update', data)
    .then(data => data.data)
    .catch(error => error);
}
