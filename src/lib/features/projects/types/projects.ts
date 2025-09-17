import { z } from "zod";

const MAX_UPLOAD_SIZE = 3 * 1024 * 1024; // 3MB
const ACCEPTED_FILE_TYPES = ["image/png", "image/jpeg"];

const ImageSchema = z.object({
  url: z.string(),
  caption: z.string().nullable(),
});

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  briefDesc: z.string(),
  type: z.enum(["internal", "external", "cross_orgs"]),
  fullDesc: z.string(),
  dateLaunched: z.string(),
  links: z.array(
    z.object({
      link: z.string(),
      name: z.string(),
    })
  ),
  status: z.string(),
  featured: z.boolean(),
  images: z.array(z.union([z.string(), ImageSchema])).min(1), // <-- Accept string or object
  newImages: z
    .instanceof(File)
    .optional()
    .refine((file) => !file || file.size <= MAX_UPLOAD_SIZE, {
      message: "File size must be less than 3MB",
    })
    .refine((file) => !file || ACCEPTED_FILE_TYPES.includes(file.type), {
      message: "File must be a PNG or JPEG",
    })
    .optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

// --------------------------------------------
// DetailedProjectSchema based on API response
// --------------------------------------------

export const ClientSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export type Client = z.infer<typeof ClientSchema>;

const MemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  photo: z.string(),
  isVisible: z.boolean(),
  createdAt: z.string(),
  modifiedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const OrganizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const CollaboratorsByRoleSchema = z.record(
  z.string(),
  z.object({
    members: z.array(MemberSchema),
    organizations: z.array(OrganizationSchema),
  })
);

const LinkSchema = z.object({
  link: z.string(),
  name: z.string(),
});

export const DetailedProjectSchema = z.object({
  title: z.string(),
  briefDesc: z.string(),
  fullDesc: z.string(),
  dateLaunched: z.string(),
  type: z.enum(["internal", "external", "cross_orgs"]),
  status: z.string(),
  featured: z.boolean(),
  clients: z.record(ClientSchema),
  collaboratorsByRole: CollaboratorsByRoleSchema,
  images: z.array(ImageSchema),
  links: z.array(LinkSchema),
});

export type DetailedProject = z.infer<typeof DetailedProjectSchema>;
