export const setStorage = (key: string, obj: any): void => {
    localStorage.setItem(key, JSON.stringify(obj))
}

export const getStorage = (key: string): any => {
    return localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key) || "") : null
}

export const existStorage = (key: string) => {
    return getStorage(key) === null
} 

export const clearStorage = () => {
    return localStorage.clear()
} 