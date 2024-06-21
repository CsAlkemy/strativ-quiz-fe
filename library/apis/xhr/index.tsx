import { getToken } from '@library/apis/fetch';

export default function xhrUploadRequest(formData: any, onUploadProgress: (p: number) => void) {
    return new Promise(async (resolve, reject) => {
        const token = getToken();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.NEXT_PUBLIC_JOB_SEEKER_API_BASE_URL + 'api/v1/file-upload', true);
        // Set the authorization header
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
        // Set the progress event listener
        xhr.upload.addEventListener('progress', event => {
            if (event.lengthComputable && onUploadProgress) {
                onUploadProgress((event.loaded / event.total) * 100);
            }
        });
        // Set the onload and onerror event listeners
        xhr.onload = () => {
            const parsed = JSON.parse(xhr.response);
            if (xhr.status === 201) {
                resolve(parsed);
            } else {
                reject(new Error(parsed));
            }
        };
        xhr.onerror = (error: any) => {
            reject(new Error(error));
        };
        xhr.send(formData);
    });
}
