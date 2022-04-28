
import { IProfile } from '@interfaces/_index'
import { ProfileTemplate } from '@views/templates/_index'
import { getStorage } from '@utils/localStorage'

type Props = {}

export default function Profile({ }: Props) {

  const user:any = getStorage('user');
  const profileDS: IProfile = { 
    ...user,
    displayName: user.providerData[0].displayName,  
    photoUrl: user.providerData[0].photoURL
  }

  return (
    <ProfileTemplate
      profile={profileDS}
    />
  )
}