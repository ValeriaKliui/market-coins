import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@shared/Layout';
import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ConfigProvider, Spin } from 'antd';
import { theme } from '@constants/theme';
import { PATHS } from '@constants/paths';

const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<Spin />}>
                <Layout />
            </Suspense>
        ),
        children: PATHS,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ConfigProvider theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ConfigProvider>
    </StrictMode>
);
