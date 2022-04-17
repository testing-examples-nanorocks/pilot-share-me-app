import { Routes, Route } from "react-router-dom";
import React from 'react'
import { LoginPage, DashboardPage, NotFoundPage, ProfilePage, NotificationsPage } from './../pages/_index'

type Props = {
    children: React.ReactNode
}

export default function Router(props: Props) {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage /> } />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}