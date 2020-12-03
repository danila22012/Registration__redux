import { combineReducers } from 'redux'
//сюда буду импортить все редюсеры
import {jokeReducer} from './Reducers/jokeReducer'
import {usersReducer} from './Reducers/usersReducer'
import { addUserReducer } from "./Reducers/addUserReducer";


export const rootReducer = combineReducers({
    jokeReducer, usersReducer, addUserReducer
})


