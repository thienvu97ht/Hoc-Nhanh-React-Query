import { AxiosResponse } from 'axios';
import { BodyUpdate, ListParams } from 'types';
import axiosClient from '../axiosClient';

const ROUTE = 'students';

const studentAPI = {
    async getList(params: ListParams, signal?: AbortSignal): Promise<AxiosResponse> {
        const url = `${ROUTE}`;
        return await axiosClient.get(url, { params, signal });
    },

    async getItem(id: number | string): Promise<AxiosResponse> {
        const url = `${ROUTE}/${id}`;
        return await axiosClient.get(url);
    },

    async create(data: BodyUpdate): Promise<AxiosResponse> {
        const url = `${ROUTE}`;
        return await axiosClient.post(url, data);
    },

    async update(id: number | string, data: BodyUpdate): Promise<AxiosResponse> {
        const url = `${ROUTE}/${id}`;
        return await axiosClient.put(url, data);
    },

    async delete(id: number | string): Promise<AxiosResponse> {
        const url = `${ROUTE}/${id}`;
        return await axiosClient.delete(url);
    },
};

export default studentAPI;
