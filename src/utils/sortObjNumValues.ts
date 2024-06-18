export const sortObjNumValues =
    <T>(key: keyof T) =>
    (a: T, b: T) =>
        Number(a[key]) - Number(b[key])
