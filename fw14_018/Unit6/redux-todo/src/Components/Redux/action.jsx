// actionType  
export const ADD_COUNT = 'ADD_COUNT';
export const SUB_COUNT = 'SUB_COUNT'
// Action Creators:

export const addCount = (payload) =>({
    type: ADD_COUNT, payload
})

export const subCount =(payload)=>({
    type: SUB_COUNT, payload
})