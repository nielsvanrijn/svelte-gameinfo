import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}', 'tests/*.test.{js,ts}']
    }
};

export default config;
