import * as types from '../types'
const initialState={
    categories:[],
    loading: false,
    error:null
}

export const categoryReducer= (state= initialState, action)=> {
    switch (action.type){
        case types.GET_CATEGORIES:
            return{
                ...state,
                categories: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
}