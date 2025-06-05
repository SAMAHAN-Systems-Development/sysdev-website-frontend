import { ApiArrayRequest, request } from "@/lib/axios/request";
import { Project } from "../types/projects";
import { AxiosError } from "axios";

export const GetProjects = async (
  status: 'active' | 'not_active' | 'upcoming' | 'ongoing' | undefined = undefined,
  sort: 'yearDesc' | 'yearAsc' = 'yearDesc',
  type: 'internal' | 'external' | 'cross_orgs' | undefined = undefined,
  page: number = 1,
  limit: number = 10,
) => {
  try {
    const url = `/api/projects?page=${page}&limit=${limit}` +
      (sort ? `&sort=${sort}` : '') +
      (type ? `&type=${type}` : '') +
      (status ? `&status=${status}` : '');
    const res = await request<ApiArrayRequest<Project[]>>('GET', url);
    return res.data;
  } catch(e) {
    if (e instanceof Error) {
      console.error(e.toString());
    } else if (e instanceof AxiosError) {
      console.error(e.response?.data as string);
    } else {
      console.error('An unknown error occured');
    }
    console.log(e);
    return undefined;
  }
}