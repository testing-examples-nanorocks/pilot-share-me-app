export { default as Router } from './Router'
import { IRoute } from '../interfaces/_index'
import { LoginPage, DashboardPage, NotFoundPage, ProfilePage, NotificationsPage, HistoryPage } from './../pages/_index'

export const routeMapper: IRoute [] = [
    {
        routeName: '/',
        element: <LoginPage />,
        isAuth: false
    },
    {
        routeName: '/dashboard',
        element: <DashboardPage />,
        isAuth: true
    },
    {
        routeName: '/profile',
        element: <ProfilePage />,
        isAuth: true
    },
    {
        routeName: '/notifications',
        element: <NotificationsPage />,
        isAuth: true
    },
    {
        routeName: '/history',
        element: <HistoryPage />,
        isAuth: true
    },
    {
        routeName: '*',
        element: <NotFoundPage />,
        isAuth: true
    },
]