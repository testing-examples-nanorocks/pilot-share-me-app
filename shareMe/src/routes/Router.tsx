import { Routes, Route } from "react-router-dom";
import React from 'react'
import { routeMapper } from ".";
import AuthMiddleware from "../middleware/AuthMiddleware";
import { IRoute } from './../interfaces/_index'

type Props = {
    children: React.ReactNode
}

export default function Router(props: Props) {
    return (
        <>
            <Routes>
                {routeMapper.map((item: IRoute, index: number) => {
                    return (
                        <Route path={item.routeName} key={index} element={
                            <AuthMiddleware item={item}>
                                {item.element}
                            </AuthMiddleware>
                        }/>
                    )
                })}
            </Routes>
        </>
    )
}