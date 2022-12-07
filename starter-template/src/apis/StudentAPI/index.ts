import { ListParams, ListResponse, Student } from '~/types'
import axiosClient from '../axiosClient'

const ROUTE = 'student'

const userAPI = {
  async getList(params: ListParams): Promise<ListResponse<Student>> {
    const url = `${ROUTE}`
    return await axiosClient.get(url, { params })
  }
}

export default userAPI
