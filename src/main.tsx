import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@shared/Layout'
import { PATHS_LINKS } from '@constants/paths'
import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

const MainPage = lazy(() => import('@pages/MainPage'))

const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<div>loading</div>}>
                <Layout />
            </Suspense>
        ),
        children: [{ path: PATHS_LINKS.main, element: <MainPage /> }],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
)
