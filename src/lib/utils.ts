import getConfig from "next/config";

export const withBasePath = (path: string) => {
	const basePath = getConfig().publicRuntimeConfig?.basePath || "";
	return `${basePath}${path}`;
};
