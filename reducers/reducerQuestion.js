export default (state = [], action) => {
    switch (action.type){
        // Check if action dispatched is
        // FETCH_QUESTION and act on that
        case 'SET_QUESTION':
            //state.push(action.question);
            return [
                ...state,
                Object.assign({}, action.question)
                ];  
        case 'UNSET_QUESTION':
            return [];
        default:
            return state;
  }
};