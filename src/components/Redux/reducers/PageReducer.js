const initialState = {
    pageList: []
};


export const actionTypes = {
    pageList: '[pageList] Action'
}
  
export const PageReducder = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.pageList: {
            return {
                ...state,
                pageList: action.payload
            }
        }
        default: { 
            return state;
        }
    }
}

export const actions = {
    pageList: (pageList) => {
        return {
            type: actionTypes.pageList,
            payload: pageList
        }
    }
}