import http from '../http-common';
import { DeviceType } from '../types/device.type';

class DeviceDataService {
    getAll() {
        return http.get('/api/device');
    }

    create(data: DeviceType){
        return http.post('/api/device', data);
    }

    update(id: number, data: DeviceType){
        return http.put(`/api/device/${id}`, data);
    }

    delete(id: number){
        return http.delete(`/api/device/${id}`)
    }
}

export default new DeviceDataService;