import { useDispatch, useSelector } from "react-redux";
import { add, decrease, generateColors, generateOptions, increase, setDifficulty, sub } from "./actions";
import { useEffect, useState } from "react";

function App() {
  const score = useSelector((state:any) => state.score);
  const difficulty = useSelector((state:any) => state.difficulty);
  const color = useSelector((state:any) => state.color);
  const options = useSelector((state:any) => state.colorArray);
  const dispatch = useDispatch();

  const [prevCol, setPrevCol] = useState(null);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [colArr, setColArr] = useState(options.concat(color).sort(() => Math.random() - 0.5));

  useEffect(()=>{
    if(prevCol!==null&&prevCol!==color){
      dispatch(generateOptions(color, difficulty));
    }
    setPrevCol(color);
  }, [color, prevCol, dispatch]);

  useEffect(() => {
    // Function to run when myState changes
    setColArr(options.concat(color).sort(() => Math.random() - 0.5));
  }, [options]);

  console.log(color, options, colArr);

  function checkAnswer(item:string){
    if(item===color){
      setWon(true);
      setLost(false);
    }
    else{
      setLost(true);
      setWon(false);
    }
  }

  function nextQuestion(){
    setWon(false);
    setLost(false);
    dispatch(generateColors());
  }

  return (
    <section className="main" style={won?{backgroundColor: color}:{backgroundColor: '#efefef'}&&lost?{backgroundColor: "#ef1c4c"}:{backgroundColor: '#efefef'}}>
      <h3 className="text-block font-bold text-2xl capitalize">
        {won?"Correct Guess":lost?"Wrong Answer":"Guess The Color"}
      </h3>
      <h5 className="text-block text-3xl">{color}</h5>
      <div className="grid gap-4 grid-cols-2 xs:grid-cols-1 xl:grid-cols-4">
          {colArr.map((item:any) => (
            <div style={{backgroundColor: item}} className={won||lost?"block revealed":"block"} onClick={()=>{won||lost?null:checkAnswer(item)}}>
              <div className={won||lost?"title revealed":"title"}>{item}</div>
              <div className={(won||lost)&&item===color?"text-lg indicator":"text-lg indicator hidden"}>👍</div>
            </div>
          ))}
      </div>
      <br />
      {won||lost?
      <button onClick={()=>nextQuestion()} className="bg-gray-400 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded">
        NEXT
      </button>:
      <button onClick={()=>dispatch(generateColors())} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded">
        REGENERATE
      </button>
      }
      <div className="footer text-xs">
        <a className="underline" href="https://kadamyash.me" target="_blank" rel="noreferrer">AUTHOR'S PAGE</a> : PROJECT CURRENTLY IN ALPHA PHASE.
      </div>
    </section>
  )
}

export default App
