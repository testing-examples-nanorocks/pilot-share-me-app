import React from 'react'
import { NotificationItem } from './_index'

type Props = {}

export default function Notifications({ }: Props) {
    return (
        <><div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold leading-none text-gray-900">Latest Notifications</h3>
            <a href="#" className="text-sm font-medium ring-indigo-100 hover:underline">
                Show more
            </a>
        </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                    {[1, 2, 3, 4].map((item: any, index: number) => {
                        return (
                            <NotificationItem key={index} item={item}/>
                        )
                    })}
                </ul>
            </div></>
    )
}