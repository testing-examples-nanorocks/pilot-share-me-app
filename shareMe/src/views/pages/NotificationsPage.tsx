import { INotificationItem } from '@interfaces/_index'
import notifications from '@mock/NotificationsMock'
import { NotificationsTemplate } from '@views/templates/_index'

type Props = {}

export default function NotificationsPage({ }: Props) {

  const notificationsDS: INotificationItem[] = notifications

  return (
    <NotificationsTemplate 
    notifications={notificationsDS}
    />
  )
}