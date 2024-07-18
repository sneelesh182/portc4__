// action.ts for profiles
import { UserType } from "./ActionType";
import { UserInterface } from "../Interfaces/UserInterface";

import axios from 'axios'

export const loadingUser=()=>({
    type:UserType.LOADING
})
export const errorUser=()=>({
    type:UserType.ERROR
})
export const postUser=(payload:UserInterface[])=>({
    type:UserType.POST_USER,
    payload
})
export const showUser=(payload:UserInterface[])=>({
    type:UserType.GET_USER,
    payload
})
export const saveUser=(value:UserInterface)=>{
    return async (dispatch: (arg0: { type: UserType; payload?: UserInterface[]; }) => void)=>{
            dispatch(loadingUser())
            try{
            let res=await axios.post(`https://my-server-wv9d.onrender.com/users`,value)
            dispatch(postUser(res.data))
            dispatch(showUser(res.data))
            }catch(err){
                dispatch(errorUser())
            }
    }
}

export const fetchUser=()=>{
    return async (dispatch: (arg0: { type: UserType; payload?: UserInterface[]; }) => void)=>{
            dispatch(loadingUser())
            try{
                let res=await axios.get(`https://my-server-wv9d.onrender.com/users`)
                    dispatch(showUser(res.data))
            }catch(err){
                dispatch(errorUser())
            }
    }
}