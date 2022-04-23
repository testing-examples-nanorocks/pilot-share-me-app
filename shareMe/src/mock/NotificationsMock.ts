import { INotificationItem } from "../interfaces/_index";

const notifications: INotificationItem[] = [
    {
        id: 1,
        type: 'New article',
        description: 'New article added in programming category',
        date: '12.02.2022'
    },
    {
        id: 2,
        type: 'Remove article',
        description: 'Article moved to history table',
        date: '03.07.2022'
    },
    {
        id: 3,
        type: 'Error',
        description: 'There was an error while creating new category',
        date: '01.01.2022'
    },
]

export default notifications;