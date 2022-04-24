import React from 'react'
import { INotificationItem } from '../../interfaces/INotificationItem'
import { NotificationsContentLoader, Notifications, Navbar } from "../organisms/_index"

type Props = {
    notifications: INotificationItem[]
}

export default function NotificationsTemplate({ notifications }: Props) {
    return (
        <>
            <div className="min-h-full">
                <Navbar />
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                    </div>
                </header>
                <main>

                    <div className="max-w-2xl mx-auto pt-10">
                        <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 ">
                            <NotificationsContentLoader />
                            <Notifications notifications={notifications} />
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}