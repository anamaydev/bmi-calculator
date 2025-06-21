import React from 'react'
import {EatingIcon, SleepIcon, ExerciseIcon} from "./icons/index.js";

const Tips = () => {
  return (
    <section className="flex flex-col gap-5 lg:gap-4 lg:flex-row gradient-tip relative py-7 px-3 sm:px-5 sm:py-7.6 lg:px-17.5">
      <Tips.Tip
        icon={<EatingIcon/>}
        title={'Healthy eating'}
        tip={'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'}
      />

      <Tips.Tip
        icon={<ExerciseIcon/>}
        title={'Regular exercise'}
        tip={'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'}
      />

      <Tips.Tip
        icon={<SleepIcon/>}
        title={'Adequate sleep'}
        tip={'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'}
      />
    </section>
  )
}

Tips.Tip = function TipsTip({icon, title, tip}){
  return (
    <div className="flex flex-col gap-4 sm:gap-5 sm:flex-row lg:flex-col lg:gap-6">
      <div>{icon}</div>
      <div className="flex flex-col gap-3">
        <div className="text-preset-4-semi-bold text-blue-900">{title}</div>
        <div className="text-preset-6-regular text-grey-500">{tip}</div>
      </div>
    </div>
  )
}
export default Tips
