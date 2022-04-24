
import { IProfile } from '../../interfaces/IProfile'
import profile from '../../mock/ProfileMock'
import ProfileTemplate from '../templates/ProfileTemplate'

type Props = {}

export default function Profile({ }: Props) {

  const profileDS: IProfile = profile

  return (
    <ProfileTemplate
      profile={profileDS}
    />
  )
}