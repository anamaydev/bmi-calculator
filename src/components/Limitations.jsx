import {createElement} from "react";
import {GenderIcon, AgeIcon, MuscleIcon, PregnancyIcon, RaceIcon, CurvedPatternRight} from "./icons/index.js";

const Limitations = () => {

  const limitationsData = [
    {icon: GenderIcon, title: "Gender", description: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."},
    {icon:AgeIcon, title: "Age", description: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."},
    {icon: MuscleIcon, title: "Muscle", description: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."},
    {icon: PregnancyIcon, title: "Pregnancy", description: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."},
    {icon: RaceIcon, title: "Race", description: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}
  ]

  return (
    <section className="flex flex-col gap-7 py-10 px-3 sm:py-12 sm:px-5 lg:py-13 lg:px-17.5 relative">
      <div className="flex flex-col gap-4 lg:absolute">
        <h3 className="text-preset-3-semi-bold lg:text-preset-2-semi-bold text-blue-900 sm:text-center lg:text-start">Limitations of BMI</h3>
        <p className="text-preset-6-regular text-grey-500 sm:text-center lg:text-start lg:max-w-70.5">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
        <CurvedPatternRight className="hidden lg:block relative left-20"/>
      </div>

      <div className="grid gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6 lg:gap-4">
        {
          limitationsData.map(limitation => (
            <Limitations.Card key={limitation.title} icon={limitation.icon} title={limitation.title} description={limitation.description} />
          ))
        }
      </div>
    </section>
  )
}

Limitations.Card = function LimitationCard({icon, title, description}) {
  return (
    <div
      className="flex flex-col gap-2 p-3 rounded-2xl limitations-shadow sm:col-span-2 sm:last:col-start-2
      lg:first:col-start-4 lg:nth-2:col-start-3 lg:nth-4:col-start-2 lg:last:col-start-4 lg:first:translate-x-[100px]"
    >
      <div className="flex items-center gap-2">
        <div>{createElement(icon)}</div>
        <p className="text-preset-5-semi-bold text-blue-900">{title}</p>
      </div>
      <p className="text-preset-6-regular text-grey-500">{description}</p>
    </div>
  )
}

export default Limitations
