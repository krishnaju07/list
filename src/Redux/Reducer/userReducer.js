import { USER_LIST } from "../ActionType"; 

const initialState = {
    get_User: [],
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LIST:
        return { ...state, get_User: action.payload };

        default:
        return state
    }
  };

  export default UserReducer;