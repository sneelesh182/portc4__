// bgreduce for themes
import { bgState, BgType, bgtype } from "./ActionType";

const initialState:bgState={
    solid:'',
    linear1:'',
    linear2:'',
    radial1:'',
    radial2:'',
    foreground:'',
    bgActionType:'',
    name: 'Mason Parker',
  designation: 'Graphics & UI/UX Designer',
  location: 'Denver, United States',
  bio: 'I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise. With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions, leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting pixel-perfect Uls and captivating graphics that elevate user experiences',
  skills:'I am efficient in various fields like tech stacks,libraries and frameworks such as HTML,CSS,JavaScript,Java,React,BootStrap,Tailwind CSS,Node JS',
  projects:'https://netlifyevaluation.netlify.app/',
  

}
export const bgreducer=(state:bgState=initialState,action:bgtype)=>{
    switch(action.type){
        case BgType.SOLIDS:
            return {...state,solid:action.payload,bgActionType:'solid'}
            case BgType.LINEAR_GRADIENT:
                return {...state,linear1:action.payload1,linear2:action.payload2,bgActionType:'linear'}
                case BgType.RADIAL_GRADIENT:
                    return {...state,radial1:action.payload1, radial2:action.payload2,bgActionType:'radial' }
                    case BgType.FOREGROUND:
                        return {...state,foreground:action.payload,bgActionType:'foreground'}
                        case BgType.UPDATE_PROFILE:
      return { ...state, ...action.payload };
        default:
            return state
    }
}