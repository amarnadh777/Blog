 import actionTypes from "./actionTyoes";
 const initalStates = { islogined : false,
    athorInfo: {},
 }



const reducer = (state = initalStates , action ) =>
{ 

    console.log("actions ",action);
    
    switch (action.type)
    {
        case actionTypes.LOGIN:
            
            return {...state,islogined:state.islogined = true,authorInfo:state.athorInfo  = action.payload.authorInfo }
        case actionTypes.LOGOUT:
            return{...state,islogined:false,authorInfo:{}}

        default : return state
    }
}
export default reducer