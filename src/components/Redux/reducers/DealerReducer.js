const initialState = {
    dealerList: []
};


export const actionTypes = {
    dealerList: '[dealerList] Action'
}
  
export const DealerReducder = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.dealerList: {
            return {
                ...state,
                dealerList: action.payload
            }
        }
        default: { 
            return state;
        }
    }
}

export const actions = {
    dealerList: (dealerList) => {
        return {
            type: actionTypes.dealerList,
            payload: dealerList
        }
    }
}