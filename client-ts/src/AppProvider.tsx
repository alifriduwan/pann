import React from "react";
import { createContext, useContext, useState } from "react";
import { useAuth } from 'react-oidc-context';

function createCtx<A extends {} | null>() {
    const ctx = createContext<A | undefined>(undefined)
    function useCtx() {
        const c = useContext(ctx)
        if (c === undefined)
            throw new Error('useCtx must be inside a Provider with a value')
        return c
    }
    return [useCtx, ctx.Provider] as const
}

export interface IAppctx {
    userInfo: UserInfo
    action: {
        setUserInfo: (userInfo: UserInfo) => void
        isStaff: () => boolean,
        signOut: () => void,
    }
}

export const [useAppCtx, AppCtxProvider] = createCtx<IAppctx>()

export type UserInfo = {
    ready: boolean
    username?: string
    displayName?: string
    staff?: boolean
}

const initialUserInfo = {
    ready: false
}

export type AppProviderProps = {
    children: JSX.Element
}

function AppProvider({children}: AppProviderProps){
    const auth = useAuth()
    const [_userInfo, _setUserInfo] = useState<UserInfo>(initialUserInfo)

    function setUserInfo(userInfo: UserInfo){
        _setUserInfo({...userInfo, ready: true})
    }
    
    function isStaff(){
        const groups:any = auth.user?.profile.groups
        _userInfo.staff = groups.indexOf('staff') >= 0 ? true:false
        return _userInfo.staff

    }

    function signOut(){
        auth.signoutRedirect()
        _setUserInfo({ready: false})
    }

    const appStore = {
        userInfo: _userInfo,
        action: {
            setUserInfo,
            isStaff,
            signOut
        }
    }

    return (
        <AppCtxProvider value={appStore}>{children}</AppCtxProvider>
    )
}

export default AppProvider
