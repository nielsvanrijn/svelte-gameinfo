export interface Platform {
    platform: {
        id: number,
        name: string,
        slug: string,
        image: string | null,
        year_end: number | null,
        year_start: number,
        games_count: number,
        image_background: string,
    },
    released_at: string,
    requirements_en: { minimum: string, recommended: string } | null,
    requirements_ru: { minimum: string, recommended: string } | null
}