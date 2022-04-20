import React from 'react'
import { RefreshCcw } from 'react-feather'

type Props = {}

export default function Table({ }: Props) {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Article
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Category
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        To dashboard
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Mark
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Otto
                                    </td>
                                    <td className="cursor-pointer hover:text-indigo-400 text-sm text-indigo-700 font-light px-6 py-4 whitespace-nowrap">
                                        <RefreshCcw className='inline mr-1' size={16} /> Rollback
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Jacob
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Thornton
                                    </td>
                                    <td className="cursor-pointer hover:text-indigo-400 text-sm text-indigo-700 font-light px-6 py-4 whitespace-nowrap">
                                        <RefreshCcw className='inline mr-1' size={16} /> Rollback
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Larry
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Wild
                                    </td>
                                    <td className="cursor-pointer hover:text-indigo-400 text-sm text-indigo-700 font-light px-6 py-4 whitespace-nowrap">
                                        <RefreshCcw className='inline mr-1' size={16} /> Rollback
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}