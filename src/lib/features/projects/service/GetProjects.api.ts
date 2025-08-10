import { ApiArrayRequest, request } from "@/lib/axios/request";
import { Project } from "../types/projects";
import { AxiosError } from "axios";

export const GetProjects = async (
  status: 'active' | 'not_active' | 'upcoming' | 'ongoing' | undefined = undefined,
  sortByName: 'desc' | 'asc' = 'desc',
  sortByYear: 'yearDesc' | 'yearAsc' = 'yearDesc',
  type: 'internal' | 'external' | 'cross_orgs' | undefined = undefined,
  page: number = 1,
  limit: number = 100,
) => {
  try {
    const url = `/api/projects?page=${page}&limit=${limit}` +
      (sortByName ? `&sortByName=${sortByName}` : '') +
      (sortByYear ? `&sortByYear=${sortByYear}` : '') +
      (type ? `&type=${type}` : '') +
      (status ? `&status=${status}` : '');
    const res = await request<ApiArrayRequest<Project[]>>('GET', url);
    //console.log(res);
    return res.data;
  } catch(e) {
    if (e instanceof Error) {
      //console.error(e.toString());
    } else if (e instanceof AxiosError) {
      //console.error(e.response?.data as string);
    } else {
      //console.error('An unknown error occured');
    }
    //console.log(e);
    return undefined;
  }
}

