// actiontype.ts for profiles
import { UserInterface } from "../Interfaces/UserInterface";
export enum UserType{
    POST_USER='POST_USER',
    GET_USER='GET_USER',
    LOADING='LOADING',
    ERROR='ERROR'
}
export interface userState{
    isLoading:boolean,
    isError:boolean,
   user:UserInterface[],
}
export interface postUser{
    type:UserType.POST_USER,
    payload:UserInterface[]
}
export interface getUser{
    type:UserType.GET_USER,
    payload:UserInterface[]
}
export interface loadingUser{
    type:UserType.LOADING
}
export interface errorUser{
    type:UserType.ERROR
}

export type USERSTYPE= postUser | getUser | loadingUser | errorUser