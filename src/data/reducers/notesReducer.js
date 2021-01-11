const initialState = {
  notes: [{ id: 0, text: 'hello' }],
};

const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};

export default notesReducer;
