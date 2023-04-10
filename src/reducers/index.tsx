import { combineReducers } from "redux";
import score from "./scorekeeper";
import difficulty from "./difficulty";
import { colorArray, colorGen } from "./colors";

const reducerGrp = combineReducers({
    score: score,
    difficulty: difficulty,
    color: colorGen,
    colorArray: colorArray
});

export default reducerGrp;