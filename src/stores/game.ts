import { writable } from 'svelte/store';
import type { Game } from '@/models/Game';
import { customFetch } from '@/helpers/fetchHelper';
import type { ApiResponse } from '@/models/ApiResponse';

export const games = writable<Game[]>([]);

export const fetchGames = async () => {
    games.set((await customFetch<ApiResponse<Game[]>>('games', { ordering: '-added' })).results);
    return games;
}