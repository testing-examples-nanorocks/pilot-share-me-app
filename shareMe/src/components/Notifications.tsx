import React from 'react'

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
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    Neil Sims
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $320
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    Bonnie Green
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $3467
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate ">
                                    email@windster.com
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                $67
                            </div>
                        </div>
                    </li>
                </ul>
            </div></>
    )
}