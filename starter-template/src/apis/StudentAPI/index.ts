import { AxiosResponse } from 'axios'
import { ListParams } from 'types'
import axiosClient from '../axiosClient'

const ROUTE = 'students'

const studentAPI = {
  async getList(params: ListParams): Promise<AxiosResponse> {
    const url = `${ROUTE}`
    return await axiosClient.get(url, { params })
  }
}

export default studentAPI
