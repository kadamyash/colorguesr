const score = (state = 0, action:any) => {
    switch(action.type){
        case 'INCREASE': return state+1;
        case 'DECREASE': return state-1;
        case 'ADD': return state+action.payload;
        case 'SUB': return state-action.payload;
        case 'SET_SCORE': return action.payload;
        default: return state;
    }
} 

export default score;