const initialState = {
  user: { id: '123456' },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};

export default authReducer;
