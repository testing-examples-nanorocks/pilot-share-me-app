export const SpiderApiCall = (url: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "url": url
    });

    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return fetch(import.meta.env.VITE_SPIDER_NANOROCKS, requestOptions)
        .then(response => response.json())
}