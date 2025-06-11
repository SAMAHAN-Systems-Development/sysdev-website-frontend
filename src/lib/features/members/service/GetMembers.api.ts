import { ApiArrayRequest, request } from "@/lib/axios/request";
import { AxiosError } from "axios";
import { Member } from "../types/members";


export const GetMembers = async (
  roleId: number | undefined = undefined,
) => {
  try {
    const res = await request<ApiArrayRequest<Member[]>>('GET', `/api/members`+ (roleId ? `?roleIds=${roleId}` : ''));
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