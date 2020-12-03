const initialState = {
    key: 0,
    userName: "",
    userGender: "",
    userCreditCard: "",
    withLoyaltyProgram: false,
    userCoupon: "",
    timeStamp: new Date(),

    formToSend: true,
    timeToSend: 300,
}

export const addUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "HANDLE_FORM_CHANGE":
        return {...state, ...action.payload};
  
      default:
        return state;
    }
  };
  