import axios from 'axios';
import { DeviceType } from '../types/device.type';

const http = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getList = (page: number, orderBy: string, order: string) => {
    const params = {
        page,
        orderBy,
        order
    };

    return http.get('/device', { params })
    .then(data => data.data)
    .catch(error => error)
}

export const addItem = (data: DeviceType) => {
    return http.post('/device', data)
    .then(data => data.data)
    .catch(error => error)
}

export const deleteItem = (id: number)  => {
    return http.delete('/device/' + id)
    .then(data => data.data)
    .catch(error => error)
}

export const updateItem = (data: DeviceType)  => {
    return http.put('/device/' + data.id, data)
    .then(data => data.data)
    .catch(error => error);
}
