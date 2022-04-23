import React from 'react'
import { INotificationItem } from '../interfaces/INotificationItem'
import notifications from '../mock/NotificationsMock'
import { NotificationItem } from './_index'

type Props = {}

export default function Notifications({ }: Props) {
    const notificationsDS: INotificationItem[] = notifications

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">Latest Notifications</h3>
                <a href="#" className="text-sm font-medium ring-indigo-100 hover:underline">
                    Show more
                </a>
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {notificationsDS.map((item: INotificationItem) => {
                        return (
                            <NotificationItem key={item.id} item={item} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}