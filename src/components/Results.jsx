import React from 'react'
import manEatingImage from '../assets/images/image-man-eating.webp'
import {CurvedPatternLeft} from './icons'

const Results = () => {
  return (
    <section className="flex flex-col gap-6 sm:flex-row sm:gap-9 lg:gap-10 my-7.5 sm:my-11 lg:px-17.5">
      <div className="flex align-bottom flex-1 w-full">
        <img src={manEatingImage} alt="Image of man eating sushi" className="block object-cover w-full"/>
      </div>
      <div className="flex flex-col flex-1 w-full px-3 sm:px-0 sm:pr-5 lg:pr-0">
        <CurvedPatternLeft containerClass="hidden lg:block self-end mb-4.5"/>
        <div className="flex flex-col gap-4">
          <h3 className="text-preset-2-semi-bold text-blue-900">What your BMI result means</h3>
          <p className="text-preset-6-regular text-grey-500">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.</p>
        </div>
      </div>
    </section>
  )
}
export default Results
