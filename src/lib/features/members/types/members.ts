import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg'];

/**
 * Raw schema exactly as returned by API
 */
export const RawMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  photo: z.string().optional(),
  roles: z.array(
    z.object({
      roles: z.object({
        id: z.number(),
        name: z.string(),
        modifiedAt: z.string(),
        createdAt: z.string(),
        deletedAt: z.string().nullable(),
      }),
    })
  ),
});

/**
 * Frontend member schema (cleaned-up)
 */
// export const MemberSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   email: z.string(),
//   roles: z.array(z.string()).min(1),
//   photo: z.string().optional(),
// });

/**
 * Schema for member upload / editing form,
 * including File validation for photo uploads
 */
export const UploadMemberSchema = z.object({
  name: z.string(),
  email: z.string(),
  roleIds: z.array(z.number()).min(1),
  photo: z.union([
    z
      .instanceof(File)
      .refine(file => file.size <= MAX_UPLOAD_SIZE, 'File size must be ≤ 3MB')
      .refine(file => ACCEPTED_FILE_TYPES.includes(file.type), 'File must be PNG or JPEG'),
    z.string().optional(),
  ]),
});

// Types inferred from schemas
export type RawMember = z.infer<typeof RawMemberSchema>;
export type UploadMember = z.infer<typeof UploadMemberSchema>;

