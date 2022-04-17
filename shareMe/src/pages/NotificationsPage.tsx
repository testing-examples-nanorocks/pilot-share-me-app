import React from 'react'
import { Navbar } from '../components/_index'
import { NotificationsContentLoader, Notifications } from "../components/_index";
type Props = {}

export default function NotificationsPage({ }: Props) {
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
              <Notifications />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}