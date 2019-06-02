const videos = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        ...action.payload,
      }
    }
  }
  return state;
}

export default videos;
