export async function customFetch<T>(url: string, data?: object, init?: RequestInit | undefined): Promise<T> {
    const params = {
        key: import.meta.env.VITE_API_KEY,
        ...data
    }
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}${url}?${new URLSearchParams([...Object.entries(params)])}`,
        {
            ...init,
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...init?.headers
            },
        }
    );
    // console.log('customFetch response', response);
    if (!response.ok) {
        console.error('customFetch error', response);
    }
    return await (response.json() as Promise<T>);
}


// const data = {
//     key: '98236369cfc24534ba9969be54518c6b',
//     page: 1.2343,
//     yolo: 'swek'
// }
// new URL(
//     `https://api.rawg.io/api/games?${new URLSearchParams([...Object.entries(data as {key: string})])}`
// );