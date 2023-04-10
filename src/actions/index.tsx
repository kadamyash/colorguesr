export const increase = () => {
    return{
        type: "INCREASE"
    };
};

export const decrease = () => {
    return{
        type: "DECREASE"
    };
};

export const add = (count:number) => {
    return{
        type: "ADD",
        payload: count
    };
}

export const sub = (count:number) => {
    return{
        type: "SUB",
        payload: count
    };
}

export const setScore = (score:number) => {
    return{
        type: "SET_SCORE",
        payload: score
    }
}

export const setDifficulty = (level:number) => {
    return{
        type: "SET",
        payload: level
    }
}

export const generateColors = () => {
    return{
        type: "GEN_RANDOM"
    }
}

export const generateOptions = (color: string, difficulty: number) => {
    return{
        type: "GEN_OPTIONS",
        payload: {difficulty, color},
        
    }
}