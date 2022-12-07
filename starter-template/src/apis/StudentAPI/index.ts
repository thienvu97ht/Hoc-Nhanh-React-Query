import { AxiosResponse } from 'axios';
import { BodyUpdate, ListParams } from 'types';
import axiosClient from '../axiosClient';

const ROUTE = 'students';

const studentAPI = {
    async getList(params: ListParams): Promise<AxiosResponse> {
        const url = `${ROUTE}`;
        return await axiosClient.get(url, { params });
    },

    async create(data: BodyUpdate): Promise<AxiosResponse> {
        const url = `${ROUTE}`;
        return await axiosClient.post(url, data);
    },
};

export default studentAPI;
