const videos = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'SET_SELECTED_MOVIE': {
      return {
        ...state,
        selectedMovie: action.payload.movie,
      };
    }
    case 'REMOVE_MOVIE': {
      return {
        ...state,
        selectedMovie: null,
      };
    }
  }
  return state;
}

export default videos;
