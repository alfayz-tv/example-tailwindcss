import Dashboard from './components/DashboardPage/Index'
import Landing from './components/LandingPage/Index'
import Profile from './components/ProfilePage/Index'
import Login from './components/LoginPage/Index'

export const myRoutes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/landing',
        component: Landing
    }
];