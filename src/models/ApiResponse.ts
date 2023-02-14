export interface ApiResponse<T> {
    count: number,
    next: null | string,
    previous: null | string,
    results: T,
    seo_title: string,
    seo_description: string,
    seo_keywords: string,
    seo_h1: string,
    noindex: false,
    nofollow: false,
    description: string,
    filters: any
}