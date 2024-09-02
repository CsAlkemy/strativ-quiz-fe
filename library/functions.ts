export const funcResolveObjectDot = <K>(path: string, obj: K) => {
    return path.split('.').reduce(function (prev: any, curr) {
        return prev ? prev[curr] : null;
    }, obj || self);
};
export const funcFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                resolve(reader.result as string);
            } else {
                reject(new Error('File could not be read.'));
            }
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
};

export const funcBase64StringToBlob = (base64String: string): Blob => {
    const [header, base64] = base64String.split(',');
    const mime = header.match(/:(.*?);/)?.[1];
    const bytes = atob(base64);
    const arrayBuffer = new ArrayBuffer(bytes.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < bytes.length; i++) {
        uintArray[i] = bytes.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mime || 'application/octet-stream' });
};
