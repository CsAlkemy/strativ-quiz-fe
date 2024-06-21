export default async function $fetchDummy<T>(input: string, init?: RequestInit): Promise<T> {
    const extraHeaders = {
        'Content-Type': 'application/json',
    };
    return fetch(window.location.origin + '/' + input, {
        ...init,
        headers: { ...extraHeaders, ...(init?.headers || {}) },
    }).then(async res => {
        const string = await res.text();
        const json = string === '' ? {} : JSON.parse(string);
        if (res.ok) return json;
        throw json;
    });
}
