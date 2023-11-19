import { authThunkCreator } from "./auth-reducer";
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";


let initialState = {
    initialized: false 
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case  INITIALIZED_SUCCESS:
            return { ...state, initialized: true };
        default:
            return state;
    }
}

export const initializedSuccessActionCreator = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
      let promise = dispatch(authThunkCreator());
      promise.then(() => {
        dispatch(initializedSuccessActionCreator());
      });
    };
  };

export default appReducer;