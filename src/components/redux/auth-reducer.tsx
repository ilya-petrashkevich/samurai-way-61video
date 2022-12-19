import React from "react";
import {ActionsTypes} from "./store";

const SET_USER_DATA = 'SET_USER_DATA';


export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state
    }

}

export const setAuthUserData = (userId: number,
                                email: string,
                                login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }
    } as const
}

//=============================== как было до избавления от AC в названиях экшн криэйторов =======================================
//
// export const followAC = (userId: number) => {
//     return {
//         type: FOLLOW,
//         userId: userId
//     } as const
// }
// export const unfollowAC = (userId: number) => {
//     return {
//         type: UNFOLLOW,
//         userId: userId
//     } as const
// }
// export const setUsersAC = (users: UserType[]) => {
//     return {
//         type: SET_USERS,
//         users: users
//     } as const
// }
//
// export const setCurrentPageAC = (currentPage: number) => {
//     return {
//         type: SET_CURRENT_PAGE,
//         currentPage
//     } as const
// }
// export const setUsersTotalCountAC = (totalUsersCount: number) => {
//     return {
//         type: SET_TOTAL_USERS_COUNT,
//         count: totalUsersCount
//     } as const
// }
// export const toggleIsFetchingAC = (isFetching: boolean) => {
//     return {
//         type: TOGGLE_IS_FETCHING,
//         isFetching
//     } as const
// }