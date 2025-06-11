import { z } from "zod";

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];

export const ProjectSchema = z.object({
    title: z.string(),
    briefDesc: z.string(),
    type: z.enum(['internal', 'external', 'cross-orgs']),
    fullDesc: z.string(),
    dateLaunched: z.string(),
    links: z.object({
        link: z.string(),
        name: z.string(),
    }),
    status: z.string(),
    featured: z.enum(['active', 'not_active', 'upcoming', 'ongoing']),
    images: z.array(z.string()).min(1),
    newImages: z
        .instanceof(File)
        .optional()
        .refine((file) => !file || file.size <= MAX_UPLOAD_SIZE, {
            message: 'File size must be less than 3MB',
        })
        .refine((file) => !file || ACCEPTED_FILE_TYPES.includes(file.type), {
            message: 'File must be a PNG or JPEG',
        })
        .optional(),
});

export type Project = z.infer<typeof ProjectSchema>;