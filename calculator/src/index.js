import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
// import { func } from 'prop-types';

function Calculator() {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true
  });

  function handleNumber(value){
    let newValue = value;
    
    if (!calc.isInitial){
    newValue = calc.current + value;
  }
    setCalc({current: newValue, total: calc.total, isInitial:false, preOp: calc.preOp});
  }

  function handleOperator(value){
    const total = doCalculation();
    // total = total.toString()
    
    setCalc({current: total.toString(), total: total.toString(), isInitial:true, preOp: value});
  }

  function doCalculation(){
    let total = parseInt(calc.total);

    switch(calc.preOp){
      case "+":
        total += parseInt(calc.current);
        break;
        case "-":
        total -= parseInt(calc.current);
        break;
        case "*":
        total *= parseInt(calc.current);
        break;
        case "/":
        total /= parseInt(calc.current);
        break;
        default:
        total = parseInt(calc.current);
        break;
    }
        return total;
  }

  function renderDisplay(){
    return calc.current;
  }

  function handleClear(){
   setCalc({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: " "
   })
  }


  // function handleEquals(){
  //   let total = doCalculation();
    
  //   setCalc({current: totalString(), total: totalString(), isInitial:true, preOp: " "}); 
  // }



  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="/"/>

      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="*"/>

      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="-"/> 
      
      <CalcButton value="C"  onClick={handleClear}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="="  onClick={handleOperator}/>
      <CalcButton className="operator" onClick={handleOperator} value="+"/>
      
    </div>
  )
}

function CalcButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}
ReactDOM.render(<div className="app-container"><Calculator/></div>, document.getElementById('root'));


 