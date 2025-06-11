import { request } from "@/lib/axios/request";
import { DetailedProject } from "../types/projects";
import { AxiosError } from "axios";

// Define wrapper type
type GetProjectResponse = {
  data: DetailedProject;
  statusCode: number;
  message: string;
};

export const GetProjectById = async (id: number) => {
  try {
    const url = `/api/projects/${id}`;
    const res = await request<GetProjectResponse>('GET', url);
    console.log(res);
    return res.data; // ← access nested 'data'
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.toString());
    } else if (e instanceof AxiosError) {
      console.error(e.response?.data as string);
    } else {
      console.error("An unknown error occurred");
    }
    console.log(e);
    return undefined;
  }
};
