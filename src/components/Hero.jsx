import Calculator from "./Calculator"
import {createContext, useEffect, useState} from "react";

export const CalculatorDataContext = createContext();

const Hero = () => {
  const [system, setSystem] = useState(null);
  const [height, setHeight] = useState({});
  const [weight, setWeight] = useState({});
  const [bmi, setBmi] = useState(null);
  const [weightRangeMetric, setWeightRangeMetric] = useState({});
  const [weightRangeImperial, setWeightRangeImperial] = useState({});

  // set feedback message based on user's bmi
  function setFeedback(bmi ,system, metricRange, imperialRange) {
    let category = "";
    if(bmi < 18.5) category = "underweight";
    else if(bmi >= 18.5 && bmi <= 24.9) category = "a healthy weight";
    else if(bmi >= 25 && bmi <= 29.9) category = "overweight";
    else if(bmi >= 30 && bmi <= 34.9) category = "obese";
    else if(bmi >= 35 && bmi <= 39.9) category = "very obese";
    else category = "extremely obese";

    if(system === "metric"){
      if (!metricRange.minWeightKg || !metricRange.maxWeightKg) return null;
      return <p className="text-preset-7-regular text-white flex-1">Your BMI suggests you’re <strong>{category}</strong>. Your ideal weight is between <strong>{metricRange.minWeightKg}kgs - {metricRange.maxWeightKg}kgs</strong>.</p>
    }else {
      if (!imperialRange.minWeight || !imperialRange.maxWeight) return null;
      return <p className="text-preset-7-regular text-white flex-1">Your BMI suggests you’re <strong>{category}</strong>. Your ideal weight is between <strong>{imperialRange.minWeight.st}st {imperialRange.minWeight.lbs}lbs - {imperialRange.maxWeight.st}st {imperialRange.maxWeight.lbs}lbs</strong>.</p>
    }
  }

  useEffect(() => {
    if(!system) return;

    let calculatedBmi = null;
    if(system === 'metric') {
      const heightCm = Number(height['height-cm']);
      const weightKg = Number(weight['weight-kg']);

      if (!heightCm || !weightKg) return;

      // calculate bmi
      calculatedBmi = (weightKg / Math.pow((heightCm / 100), 2)).toFixed(1);
      setBmi(calculatedBmi);

      calcHealthyWeightRange(heightCm / 100, 'metric');
    }

    if(system === 'imperial') {
      const heightIn = Number(height['height-ft']) * 12 + Number(height['height-in']);
      const weightLbs = Number(weight['weight-st']) * 14 + Number(weight['weight-lbs']);

      if (!heightIn || !weightLbs) return;

      // calculate bmi
      calculatedBmi = ((weightLbs / Math.pow(heightIn, 2)) * 703).toFixed(1);
      setBmi(calculatedBmi);

      calcHealthyWeightRange(heightIn * 0.0254, 'imperial');
    }

    // calculate healthy weight range
    function calcHealthyWeightRange(heightM, system){
      const min = 18.5 * Math.pow(heightM, 2);
      const max = 24.9 * Math.pow(heightM, 2);

      if(system === 'metric') {
        setWeightRangeMetric({minWeightKg: min.toFixed(1), maxWeightKg: max.toFixed(1)})
      }else{
        setWeightRangeImperial({
          minWeight: convertToStLbs(min * 2.20462),
          maxWeight: convertToStLbs(max * 2.20462),
        })
      }
    }

    function convertToStLbs(weightLbs){
      const stone = Math.floor(weightLbs / 14);
      const remainingLbs = Math.round(weightLbs % 14)
      return {st: stone, lbs:remainingLbs};
    }
  },[system, height, weight]);

  return (
    /* main container */
    <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:gap-4 items-center">
      {/* about */}
      <div className="flex flex-col gap-3 lg:gap-4 flex-1">
        <h1 className="text-preset-2-semi-bold text-blue-900 text-center lg:text-start">Body Mass Index Calculator</h1>
        <p className="text-preset-6-regular text-grey-500 text-center lg:text-start">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
      </div>

      {/* calculator */}
      <CalculatorDataContext.Provider value={{system, setSystem, height, setHeight, weight, setWeight}}>
        <Calculator>
          <h2 className="text-preset-4-semi-bold text-blue-900">Enter your details below</h2>
          <div className="flex gap-3">
            <Calculator.RadioInput label={'metric'}/>
            <Calculator.RadioInput label={'imperial'}/>
          </div>

          {
            system !== 'imperial' &&
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-preset-7-regular text-grey-500">Height</p>
                <Calculator.NumericInput id={'height-cm'}/>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-preset-7-regular text-grey-500">Weight</p>
                <Calculator.NumericInput id={'weight-kg'}/>
              </div>
            </div>
          }

          {
            system === 'imperial' &&
            <div className="flex flex-col gap-2 sm:gap-4 lg:gap-3">
              <div className="flex flex-col gap-1 w-full">
                <p className="text-preset-7-regular text-grey-500">Height</p>
                <div className="flex gap-2 sm:gap-3">
                  <Calculator.NumericInput id={'height-ft'}/>
                  <Calculator.NumericInput id={'height-in'}/>
                </div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <p className="text-preset-7-regular text-grey-500">Weight</p>
                <div className="flex gap-2 sm:gap-3">
                  <Calculator.NumericInput id={'weight-st'}/>
                  <Calculator.NumericInput id={'weight-lbs'}/>
                </div>
              </div>
            </div>
          }

          <Calculator.Output>
            {
              !bmi &&
              <>
                <p className="text-preset-4-semi-bold text-white">Welcome!</p>
                <p className="text-preset-7-regular text-white">Enter you height and weight and you'll see your BMI result here</p>
              </>
            }

            {
              bmi &&
              <div  className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-preset-6-semi-bold text-white">Your BMI is...</p>
                  <p className="text-preset-2-semi-bold lg:text-preset-1-semi-bold text-white">{bmi}</p>
                </div>
               {setFeedback(bmi, system, weightRangeMetric, weightRangeImperial)}
              </div>
            }
          </Calculator.Output>
        </Calculator>
      </CalculatorDataContext.Provider>
    </div>
  )
}

export default Hero