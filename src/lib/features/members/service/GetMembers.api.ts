import { request } from "@/lib/axios/request";
import { AxiosError } from "axios";
import { RawMember } from "../types/members";

export const GetMembers = async (
  roleId?: number
): Promise<RawMember[] | undefined> => {
  try {
    const res = await request<{
      status: number;
      message: string;
      data: RawMember[];
    }>('GET', `/api/members${roleId ? `?role=${roleId}` : ''}`);
    return res.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.response?.data);
    } else {
      console.error('Unknown error', e);
    }
    return undefined;
  }
};

