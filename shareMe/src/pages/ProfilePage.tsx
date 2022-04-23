import React from 'react'
import { Navbar, ProfileContentLoader, ProfileForm } from '../components/_index'
import { IProfile } from '../interfaces/IProfile'
import profile from '../mock/ProfileMock'

type Props = {}

export default function Profile({ }: Props) {

  const profileDS: IProfile = profile

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-10">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 bg-white shadow sm:rounded-md sm:overflow-hidden">
                  <ProfileContentLoader />
                  <ProfileForm profile={profileDS}/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}