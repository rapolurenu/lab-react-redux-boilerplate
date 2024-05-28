const initialState = {
  likeCount: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LIKE':
      return {
        ...state,
        likeCount: state.likeCount + 1
      };
    case 'UNLIKE':
      return {
        ...state,
        likeCount: state.likeCount - 1
      };
    default:
      return state;
  }
};

export default reducer;
