const initalStates = { islogined : false}

const Login = "Login"
const reducer = (state = initalStates , action ) =>
{
    switch (action.type)
    {
        case Login:
            return {...state,islogined:state.islogined = true   }

        default : return state
    }
}