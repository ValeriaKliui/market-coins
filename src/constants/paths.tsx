import { lazy } from 'react';

const MainPage = lazy(() => import('@pages/MainPage'));
const CoinPage = lazy(() => import('@pages/CoinPage'));

export enum PATHS_LINKS {
    main = '/',
    coin = 'coin',
}
export const PATHS = [
    { path: PATHS_LINKS.main, element: <MainPage /> },
    {
        path: PATHS_LINKS.coin + '/:id',
        element: <CoinPage />,
    },
];
