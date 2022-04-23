import React from 'react'
import { Bell } from 'react-feather'

type Props = {
    item: any
}

export default function NotificationItem({ item }: Props) {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-slate-400 p-1 rounded text-slate-100">
                    <Bell />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate ">
                        action type
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                        description
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    12.03.2022
                </div>
            </div>
        </li>
    )
}