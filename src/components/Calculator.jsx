import {useContext, useEffect} from "react";
import {CalculatorDataContext} from "./Hero";

const Calculator = ({children}) => {

  return (
      <div className="p-3 sm:p-4 flex flex-col gap-3 sm:gap-4 bg-white rounded-[1rem] flex-1 self-stretch calculator-shadow" >
        {children}
      </div>
  )
}
export default Calculator

Calculator.RadioInput = function CalculatorRadioInput({label}){
  const {setSystem} = useContext(CalculatorDataContext);
  return (
    <div className="relative flex gap-2 flex-1 items-center">
      <div className="size-4 flex justify-center items-center rounded-full bg-blue-100">
        <div className="size-2 rounded-full bg-blue-500"></div>
      </div>
      <input
        type="radio"
        id={label}
        name="system"
        value={label}
        className="absolute z-10 size-4 cursor-pointer checked:hidden"
        onChange={e=>setSystem(e.target.value)}
      />
      <label htmlFor={label} className="text-preset-6-semi-bold text-blue-900 cursor-pointer">{label[0].toUpperCase() + label.slice(1)}</label>
    </div>
  )
}

Calculator.NumericInput = function CalculatorNumericInput({id}){
  const {height, setHeight, weight, setWeight} = useContext(CalculatorDataContext);
  const [category, unit]= id.split('-');

  // useEffect(() => {
  //   console.log('-------------------');
  //   console.log('height=', height);
  //   console.log('weight=', weight);
  //   console.log('-------------------');
  // },[height, weight]);

  function changeHeight(e){
    setHeight(prevHeight => (
      {...prevHeight, [e.target.id]: e.target.value}
    ))
  }

  function changeWeight(e){
    setWeight(prevWeight => (
      {...prevWeight, [e.target.id]: e.target.value}
    ))
  }

  return(
    <div className="w-full">
      <label htmlFor={id} hidden></label>
      <input
        type="number"
        id={id}
        name={id}
        value={category === 'height' ? height[unit] : category === 'weight' ? weight[unit] : ''}
        onChange={category === 'height' ? changeHeight : changeWeight}
        min={0}
        className="border border-grey-500 p-3 rounded-xl text-preset-4-semi-bold flex-1 min-w-0 shrink-1 w-full"
      />
    </div>
  )
}

Calculator.Output = function CalculatorOutput({children}) {
  return(
    <div className="flex flex-col gap-3 p-4 bg-blue-500 welcome-border">
      {children}
    </div>
  )
}