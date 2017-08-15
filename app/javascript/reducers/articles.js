const initialState = [];
export const articles =  (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_ARTICLE':
        case 'CREATE_ARTICLE':
            return state.concat(action.article)
        default:
            return state;
    }
}
