import React from 'react'
import { IProfile } from '@interfaces/_index'

type Props = {
    profile: IProfile
}

export default function ProfileForm({ profile }: Props) {
    return (
        <>
            <form action="#" method="POST">
                <div className="px-4 py-5  space-y-6 sm:p-6">

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Full name </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" 
                                placeholder="Full name" 
                                value={profile.name}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Email </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" 
                                placeholder="mail@gmail.com" disabled
                                value={profile.email}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Website </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                                <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" 
                                placeholder="www.example.com" 
                                value={profile.website}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700"> About </label>
                        <div className="mt-1">
                            <textarea id="about" name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="About you ...">
                                {profile.about}
                            </textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700"> Photo </label>
                        <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img src={profile.photo} alt={profile.name}/>
                            </span>
                            <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                        </div>
                    </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
            </form>
        </>
    )
}