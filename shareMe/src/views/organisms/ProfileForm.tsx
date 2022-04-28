import React, { useState } from 'react'
import { IProfile } from '@interfaces/_index'
import { UpdateProfileFactory, VerifyProfileFactory } from '@factory/_index'
import { Check, XCircle } from 'react-feather';

type Props = {
    profile: IProfile
}

export default function ProfileForm({ profile }: Props) {

    const [name, setName] = useState(profile.displayName);
    const [email] = useState(profile.email)
    const [photo, setPhoto] = useState(profile.photoURL)
    const [verified] = useState(
        profile.emailVerified ?
            <span className='text-green-500'><Check className="inline" size={16} />Verified</span> :
            <span className='text-red-500'><XCircle className="inline" size={16} />  Not verified</span>
    );


    const updateProfile = (e: any) => {
        e.preventDefault()
        UpdateProfileFactory({
            ...profile,
            displayName: name,
            photoURL: photo,
        })
    }

    const verifyProfile = () => {
        VerifyProfileFactory()
    }

    return (
        <>
            <form onSubmit={updateProfile}>
                <div className="px-4 py-5  space-y-6 sm:p-6">
                    <small className='text-gray-500 italic'>Profile created at: {profile.createdAt}</small>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700"> Photo </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="photo-url" id="photo-url" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
                                    placeholder="Add photo url"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="display-name" className="block text-sm font-medium text-gray-700"> Display name </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="display-name" id="display-name" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
                                    placeholder="Display name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="email" id="email" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300 bg-gray-200"
                                    placeholder="mail@gmail.com" disabled
                                    value={email}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="last login" className="block text-sm font-medium text-gray-700"> Last login </label>
                            <input type="text" name="last-login" id="last-login" className="bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
                                placeholder="Last login" disabled
                                value={profile.lastLoginAt}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="verified" className="block text-sm font-medium text-gray-700"> Email Verified</label>
                            <span id="verified" className="items-center rounded-l-md text-sm">{verified}</span><br />
                            {!profile.emailVerified && <small className='text-gray-500'>**Note: To verify the profile, you will receive an email to verify. After that is done, just refresh the page.</small>}
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    {!profile.emailVerified && <button type="button"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-2"
                        onClick={() => verifyProfile()}
                    >Verify</button>}
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
            </form>
        </>
    )
}