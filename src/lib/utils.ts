import getConfigServer from "next/config";

let getConfig: () => { publicRuntimeConfig?: { basePath?: string } };

if (typeof window === "undefined") {
    // Server-side: use next/config
    getConfig = getConfigServer;
} else {
    // Client-side: return default value
    getConfig = () => ({
        publicRuntimeConfig: {
            basePath: "",
        },
    });
}

export const withBasePath = (path: string) => {
    const basePath = getConfig().publicRuntimeConfig?.basePath || "";
    return `${basePath}${path}`;
};