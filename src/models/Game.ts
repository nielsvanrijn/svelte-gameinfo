import type { Genre } from './Genre';
import type { Platform } from './Platform';
import type { Rating } from './Rating';
import type { Store } from './Store';
import type { Tag } from './Tag';

export interface Game {
    id: string;
    name: string;
    slug: string,
    released: string,
    tba: false,
    background_image: string,
    rating: number,
    rating_top: number,
    ratings: Rating[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    added_by_status: {
        yet: number,
        owned: number,
        beaten: number,
        toplay: number,
        dropped: number,
        playing: number
    },
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    user_game: null,
    reviews_count: number,
    saturated_color: string,
    dominant_color: string,
    platforms: Platform[],
    parent_platforms: [
        {
            platform: {
                id: number,
                name: string,
                slug: string,
            }
        }
    ],
    genres: Genre[],
    stores: Store[],
    clip: null,
    tags: Tag[],
    esrb_rating: {
        id: number,
        name: string,
        slug: string,
        name_en?: string,
        name_ru?: string,
    },
    short_screenshots: [
        {
            id: number,
            image: string,
        },
    ]
}