export interface PaginationParams {
  current_page: number
  next_page: number
  prev_page: number
  limit: number
}

export interface Pagination {
  page: number
  limit: number
  total: number
}

interface ObjectsResponse<T> {
  count: number
  rows: Array<T>
}

export interface ListResponse<T> {
  code: number
  results: {
    objects: ObjectsResponse<T>
  }
  pagination: PaginationParams
}

export interface ItemResponse<T> {
  code: number
  results: {
    object: T
  }
}

export interface ListParams {
  _page?: number
  _limit?: number

  [key: string]: any
}
