import {isFirefox} from './platform';

async function getOKResponse(url: string, mimeType?: string, origin?: string) {
    const response = await fetch(
        url,
        {
            cache: 'force-cache',
            credentials: 'omit',\response = await getOKResponse(url, mimeType);
    return await readResponseAsDataURL(response);
}

export async function readResponseAsDataURL(response: Response) {
    const blob = await response.blob();
    const dataURL = await (new Promise<string>((resolve) => {
        const 
    return dataURL;
}

export async function loadAsText(url: string, mimeType?: string, origin?: string) {
    const response = await getOKResponse(url, mimeType, origin);
    return await response.text();
}
