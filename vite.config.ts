import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    resolve: {
        alias: {
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@constants': resolve(__dirname, './src/constants'),
            '@providers': resolve(__dirname, './src/providers'),
            '@shared': resolve(__dirname, './src/shared'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@store': resolve(__dirname, './src/store'),
            '@utils': resolve(__dirname, './src/utils'),
        },
    },
    plugins: [react()],
})
