import axios, {AxiosRequestConfig} from 'axios';
export interface PaginationRequest<T> {
    page: number;
    limit: number;
    statusCode: string;
    data: T[];
}

export interface ApiArrayRequest<T> {
    statusCode: string;
    message: string;
    data: T[];
}
export interface ApiRequest<T> {
    statusCode: string;
    message: string;
    data: T;
}
export const getAuthToken = (): string | null => {
    return window.localStorage.getItem('access_token');
};

export const setAuthHeader = (token: string | null): void => {
    if (token !== null) {
        window.localStorage.setItem('access_token', token);
    } else {
        window.localStorage.removeItem('access_token');
    }
};

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL! || "http://localhost:8000";

export const request = async <T>(
    method: AxiosRequestConfig['method'],
    url: string,
    data?: unknown,
): Promise<T> => {
    const headers: Record<string, string> = {};

    const authToken = getAuthToken();
    if (authToken !== null && authToken !== 'null') {
        headers.Authorization = `Bearer ${authToken}`;
    }
    if (data instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
    } else {
        headers['Content-Type'] = 'application/json';
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data,
    }).then((response) => response.data);
};
