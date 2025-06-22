import {useContext} from "react";
import { motion, AnimatePresence } from "motion/react"
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
  const {system, setSystem} = useContext(CalculatorDataContext);
  const isSelected = system === label;
  return (
    <div className="relative flex gap-2 flex-1 items-center">
      <motion.div
        initial={false}
        animate={{
          opacity: isSelected ? 1 : 0,
          scale: isSelected ? 1 : 0.5,
        }}
        transition={{ duration: 0.6}}
        className="size-4 flex justify-center items-center rounded-full bg-blue-100"
      >
        <AnimatePresence>
          {
            (system && system === label) &&
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="size-2 rounded-full bg-blue-500"
            ></motion.div>
          }
        </AnimatePresence>
      </motion.div>
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
      <div className="relative">
        <motion.input
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration: 0.9}}
          type="number"
          id={id}
          name={id}
          value={category === 'height' ? height[unit] : category === 'weight' ? weight[unit] : ''}
          onChange={category === 'height' ? changeHeight : changeWeight}
          min={0}
          className="border border-grey-500 p-3 rounded-xl text-preset-4-semi-bold flex-1 min-w-0 shrink-1 w-full"
        />
        <span className="absolute text-preset-4-semi-bold text-blue-500 top-1/2 right-3 transform -translate-y-1/2">{unit}</span>
      </div>
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