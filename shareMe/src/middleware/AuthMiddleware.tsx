import { useNavigate } from 'react-router-dom';
import { IRoute } from '@interfaces/_index';
import { GetCurrentFactory } from '@factory/_index';
import { existStorage } from '@utils/localStorage';

type Props = {
  children: JSX.Element
  item: IRoute
}

export default function AuthMiddleware({ children, item }: Props) {
  
  const navigate = useNavigate()
  
  if (item.routeName === '/' && !existStorage('user')) {
    setTimeout(() => {
       navigate('/dashboard')
    }, 1000)

    return <div>Loading...</div>
  }

  // check authentication from firebase
  GetCurrentFactory(navigate, item)

  return (
    <>{children}</>
  )
  
}