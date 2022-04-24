import { INotificationItem } from '../../interfaces/INotificationItem'
import notifications from '../../mock/NotificationsMock'
import { NotificationsTemplate } from '../templates/_index'

type Props = {}

export default function NotificationsPage({ }: Props) {

  const notificationsDS: INotificationItem[] = notifications

  return (
    <NotificationsTemplate 
    notifications={notificationsDS}
    />
  )
}