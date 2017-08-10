const initialState = [];
export default function (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_ARTICLES':
            console.log('GO FETCH ARTICLES YOU CUNT')
            return state;
        default:
            return state;
    }
}
