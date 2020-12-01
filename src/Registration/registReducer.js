const initialState = {
    users: [
       
    ]
}


export const registrationReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_USER_FORM":
            console.log(action);

            return {  ...state,
                users: [...state.users, action.payload] } // запись чтобы вернуть новый стейт в массиве со старым / деструктуризация юзера

        default:
            return state
    }
} 

