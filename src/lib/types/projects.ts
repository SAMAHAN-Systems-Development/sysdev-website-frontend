export type Project = {
    imageUrl: string;
    projectName: string;
    description: string;
    websiteUrl: string;
    githubUrl: string;
    clientName: string;
    deploymentMonth: string;
    deploymentYear: number;
    members?: { name: string; category: string; title: string }[];
};