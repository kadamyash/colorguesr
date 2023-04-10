import { useDispatch } from "react-redux";

const colorGen = (state="#A4A4A4", action:any) => {
    switch(action.type){
        case 'GEN_RANDOM': 
            return getRandomHexCode();
        default: return state;
    }
}

const colorArray = (state=["#CFCFCF", "#FFFFFF", "#7F7F7F"], action:any) => {
    switch(action.type){
        case 'GEN_OPTIONS': return defineRandomColorGrp(action.payload.color, action.payload.difficulty); 
        default: return state;
    }
}

// Color Functions

function getRandomHexCode() :string{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function limitedHexAdd(a: string, b: string): string {
      const numA = parseInt(a, 16);
      const numB = parseInt(b, 16);
      const sum = numA + numB;
      const limitedSum = Math.min(sum, 0xff);
      return limitedSum.toString(16);
    }  
  
function colStitcher(color:string, factor:string): string{
      const r = limitedHexAdd(color.charAt(1).concat(color.charAt(2)), factor);
      const g = limitedHexAdd(color.charAt(3).concat(color.charAt(4)), factor);
      const b = limitedHexAdd(color.charAt(5).concat(color.charAt(6)), factor);
      return ("#"+r+g+b);
}
  
function defineRandomColorGrp(currColor:string, difficulty:number): any{
    const letters = '0123456789ABCDEF';
    let factor, col1, col2, col3;
       switch(difficulty){
        case 0: 
          factor = 10;
          col1 = colStitcher(currColor, letters[Math.max(4,Math.floor(Math.random() * factor))].concat(letters[Math.min(4,Math.floor(Math.random() * factor))]));
          col2 = colStitcher(currColor, letters[Math.max(4,Math.floor(Math.random() * factor))].concat(letters[Math.min(4,Math.floor(Math.random() * factor))]));
          col3 = colStitcher(currColor, letters[Math.max(4,Math.floor(Math.random() * factor))].concat(letters[Math.min(4,Math.floor(Math.random() * factor))]));
          return([col1, col2, col3]);
        
        case 1: 
          factor = 6;
          col1 = colStitcher(currColor, letters[Math.max(2,Math.floor(Math.random() * factor))].concat(letters[Math.min(2,Math.floor(Math.random() * factor))]));
          col2 = colStitcher(currColor, letters[Math.max(2,Math.floor(Math.random() * factor))].concat(letters[Math.min(2,Math.floor(Math.random() * factor))]));
          col3 = colStitcher(currColor, letters[Math.max(2,Math.floor(Math.random() * factor))].concat(letters[Math.min(2,Math.floor(Math.random() * factor))]));
          return([col1, col2, col3]);

        case 2: 
          factor = 4;
          col1 = colStitcher(currColor, letters[Math.max(1,Math.floor(Math.random() * factor))].concat(letters[Math.min(1,Math.floor(Math.random() * factor))]));
          col2 = colStitcher(currColor, letters[Math.max(1,Math.floor(Math.random() * factor))].concat(letters[Math.min(1,Math.floor(Math.random() * factor))]));
          col3 = colStitcher(currColor, letters[Math.max(1,Math.floor(Math.random() * factor))].concat(letters[Math.min(1,Math.floor(Math.random() * factor))]));
          return([col1, col2, col3]);  

        default: break;
       }
}

export { colorGen, colorArray };