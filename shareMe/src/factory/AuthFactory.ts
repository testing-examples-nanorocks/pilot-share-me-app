import { IProfile, IRoute } from "@interfaces/_index"
import { ACTIVE_AUTH_PROVIDER, AUTH_PROVIDERS } from "@enums/_index"
import { NavigateFunction } from "react-router-dom"
import { FirebaseLoginApiCall, FirebaseLogoutApiCall, FirebaseGetCurrentApiCall, FirebaseUpdateProfileApiCall, FirebaseVerifyProfileApiCall } from '@services/_index'

export const LoginFactory = (credentials: { email: string, password: string }, navigate: NavigateFunction) => {
    switch (ACTIVE_AUTH_PROVIDER) {
        case AUTH_PROVIDERS.FIREBASE:
            FirebaseLoginApiCall(credentials, navigate)
            break;
        case AUTH_PROVIDERS.AUTH2:
            FirebaseLoginApiCall(credentials, navigate)
            break;
        default: // FIREBASE
            FirebaseLoginApiCall(credentials, navigate)
            break;
    }
}

export const LogoutFactory = (navigate: NavigateFunction) => {
    switch (ACTIVE_AUTH_PROVIDER) {
        case AUTH_PROVIDERS.FIREBASE:
            FirebaseLogoutApiCall(navigate)
            break;
        case AUTH_PROVIDERS.AUTH2:
            FirebaseLogoutApiCall(navigate)
            break;
        default: // FIREBASE
            FirebaseLogoutApiCall(navigate)
            break;
    }
}

export const GetCurrentFactory = (navigate: NavigateFunction, item: IRoute) => {
    switch (ACTIVE_AUTH_PROVIDER) {
        case AUTH_PROVIDERS.FIREBASE:
            FirebaseGetCurrentApiCall(navigate, item)
            break;
        case AUTH_PROVIDERS.AUTH2:
            FirebaseGetCurrentApiCall(navigate, item)
            break;
        default: // FIREBASE
            FirebaseGetCurrentApiCall(navigate, item)
            break;
    }
} 

export const UpdateProfileFactory = (profile: IProfile) => {
    switch (ACTIVE_AUTH_PROVIDER) {
        case AUTH_PROVIDERS.FIREBASE:
            FirebaseUpdateProfileApiCall(profile)
            break;
        case AUTH_PROVIDERS.AUTH2:
            FirebaseUpdateProfileApiCall(profile)
            break;
        default: // FIREBASE
            FirebaseUpdateProfileApiCall(profile)
            break;
    }
} 

export const VerifyProfileFactory = () => {
    switch (ACTIVE_AUTH_PROVIDER) {
        case AUTH_PROVIDERS.FIREBASE:
            FirebaseVerifyProfileApiCall()
            break;
        case AUTH_PROVIDERS.AUTH2:
            FirebaseVerifyProfileApiCall()
            break;
        default: // FIREBASE
            FirebaseVerifyProfileApiCall()
            break;
    }
} 

