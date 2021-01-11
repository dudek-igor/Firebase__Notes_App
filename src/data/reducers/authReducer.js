import { authorizationConstans } from '../constans/authorization';

const {
  USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} = authorizationConstans;

const initialState = {
  user: { id: '123456' },
  isAuthenticated: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return state;
    case LOGIN_USER_SUCCESS:
      return state;
    case LOGIN_USER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default authReducer;
