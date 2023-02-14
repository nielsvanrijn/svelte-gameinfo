export interface Store {
    id: number,
    store: {
        id: number,
        name: string,
        slug: string,
        domain: string,
        games_count: number,
        image_background: string,
    }
}