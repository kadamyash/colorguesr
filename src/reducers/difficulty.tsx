const difficulty = (state=0, action:any) => {
    switch(action.type){
        case 'SET': return action.payload;
        default: return 0;
    }
}

export default difficulty;
