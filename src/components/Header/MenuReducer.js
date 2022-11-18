const initialState = {
    menuList: []
};


export const actionTypes = {
    menuList: '[menuList] Action'
}
  
export const MenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.menuList: {
            return {
                ...state,
                menuList: action.payload.map((item, index) => {
                    item.sku = JSON.parse(item.sku);
                    item.title = JSON.parse(item.title);
                    return item;
                })
            }
        }
        default: { 
            return state;
        }
    }
}

export const actions = {
    menuList: (menuList) => {
        return {
            type: actionTypes.menuList,
            payload: menuList
        }
    }
}