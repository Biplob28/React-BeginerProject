import "./BMI.css";
import { useMemo, useState } from "react";

function BMI() {
    const Height  = 140;
    const Weight = 40;
  
    const[height, setHeight] = useState(Height)
    const[weight, setWeight]=  useState(Weight);
  
    function changeHeight(event){
      setHeight(event.target.value);
  
    }
    function changeWeight(event){
      setWeight(event.target.value)
    }

    


    const output = (height, weight) =>{
        const intometer = height/100;
        const out = weight/ (intometer*intometer)
        console.log(out)
        return out.toFixed(2);
    }   
    const out = useMemo(()=> output(height, weight),[height, weight])
  return (
    <div className="main-container">
      <h2>Project:4 BMI calculator</h2>
      <div className="sub-container">
        <p className="slider">Weight:{weight}kg</p>
        <input type="range" min={40} max={200} onChange={changeWeight}/>

        <p className="slider">Height:{height}cm</p>
        <input type="range" min={140} max={220}  onChange={changeHeight}/>
      <div className="result-section">
        <p>Your BMI is</p>
        <p className="output">{out}</p>
      </div>
      </div>
    </div>
  );
}
export default BMI;
