import { z } from "zod";
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpeg'];

export const MemberSchema = z.object({
    name: z.string(),
    email: z.string(),
    roleIds: z.array(z.number()).min(1),
    photo: z.union([
		z
			.instanceof(File)
			.optional()
			.refine((file) => {
				return !file || file.size <= MAX_UPLOAD_SIZE;
			}, 'File size must be less than 3MB')
			.refine((file) => {
				return !file || ACCEPTED_FILE_TYPES.includes(file.type);
			}, 'File must be a PNG or JPEG'),
		z.string(),
	]),
});

export type Member = z.infer<typeof MemberSchema>;