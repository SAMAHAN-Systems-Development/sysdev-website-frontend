export type Project = {
    imageUrl: string;
    projectName: string;
    type: 'internal' | 'external' | 'cross-orgs';
    description: string;
    websiteUrl: string;
    githubUrl: string;
    clientName: string;
    deploymentMonth: string;
    deploymentYear: number;
    members?: { name: string; category: string; title: string }[];
};