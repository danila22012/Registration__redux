const initialState = {
    value: "",
    status: false
    };
  
  export const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOAD_JOKE_DATA":
        return { ...state, value: action.payload.joke, status:action.payload.status };
      default:
        return state;
    }
  };
  