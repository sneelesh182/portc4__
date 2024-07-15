// userreducer.ts for profiles
import { userState, USERSTYPE, UserType } from "./ActionType";

const initialState:userState={
    isLoading:false,
    isError:false,
    user:[]
}

export const userReducer=(state:userState=initialState, action:USERSTYPE):userState=>{
    switch(action.type){
        case UserType.LOADING:
            return {...state,isLoading:true}
            case UserType.GET_USER:
                return {...state , isLoading:false,isError:false,user:action.payload}
                case UserType.POST_USER:
                    return {...state,isLoading:false,isError:false,user:action.payload}
                    case UserType.ERROR:
                        return {...state, isLoading:false,isError:true}
            default:
                return state
    }
}