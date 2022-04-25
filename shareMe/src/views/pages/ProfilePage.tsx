
import { IProfile } from '@interfaces/_index'
import profile from '@mock/ProfileMock'
import { ProfileTemplate } from '@views/templates/_index'

type Props = {}

export default function Profile({ }: Props) {

  const profileDS: IProfile = profile

  return (
    <ProfileTemplate
      profile={profileDS}
    />
  )
}