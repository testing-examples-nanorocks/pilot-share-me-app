import React from 'react'
import { IRoute } from '../interfaces/_index';

type Props = {
    children: JSX.Element
    item: IRoute
}

export default function AuthMiddleware({children, item}: Props) {
  console.log('auth middleware', item);

  return (
    <>{children}</>
  )
}