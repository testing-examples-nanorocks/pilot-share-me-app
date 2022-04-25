export { default as Router } from '@routes/Router'
import { IRoute } from '@interfaces/_index'
import { LoginPage, DashboardPage, ProfilePage, NotificationsPage, HistoryPage, AnalyticsPage, NotFoundPage } from '@views/pages/_index'

export const routeMapper: IRoute [] = [
    {
        routeName: '/dashboard',
        page: <DashboardPage />,
        isAuth: true
    },
    {
        routeName: '/',
        page: <LoginPage />,
        isAuth: false
    },
    {
        routeName: '/profile',
        page: <ProfilePage />,
        isAuth: true
    },
    {
        routeName: '/notifications',
        page: <NotificationsPage />,
        isAuth: true
    },
    {
        routeName: '/history',
        page: <HistoryPage />,
        isAuth: true
    },
    {
        routeName: '/analytics',
        page: <AnalyticsPage />,
        isAuth: true
    },
    {
        routeName: '*',
        page: <NotFoundPage />,
        isAuth: true
    },
]