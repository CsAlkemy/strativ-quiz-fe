export const funcResolveObjectDot = <K>(path: string, obj: K) => {
    return path.split('.').reduce(function (prev: any, curr) {
        return prev ? prev[curr] : null;
    }, obj || self);
};
