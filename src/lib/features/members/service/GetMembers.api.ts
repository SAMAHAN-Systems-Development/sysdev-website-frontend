import { request } from "@/lib/axios/request";
import { AxiosError } from "axios";
import { Member } from "../types/members";

// RawMember from API
type RawMember = {
  id: number;
  name: string;
  email: string;
  photo?: string;
  roles: {
    roles: {
      id: number;
      name: string;
      modifiedAt: string;
      createdAt: string;
      deletedAt: string | null;
    };
  }[];
};

export const GetMembers = async (
  roleId?: number
): Promise<Member[] | undefined> => {
  try {
    const res = await request<{
      status: number;
      message: string;
      data: RawMember[];
    }>('GET', `/api/members${roleId ? `?role=${roleId}` : ''}`);

    const transformed: Member[] = res.data.map((member) => ({
      id: member.id,
      name: member.name,
      email: member.email,
      photo: member.photo,
      roles: member.roles.map((r) => r.roles.name),
    }));

    return transformed;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.response?.data);
    } else {
      console.error('Unknown error', e);
    }
    return undefined;
  }
};

