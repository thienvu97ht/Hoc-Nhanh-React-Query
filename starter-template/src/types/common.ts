export interface Pagination {
    page: number;
    limit: number;
    total: number;
}

export interface ListParams {
    _page?: number;
    _limit?: number;

    [key: string]: any;
}

export interface BodyUpdate {
    [key: string]: any;
}
