import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Results from "./components/Results";

const App = () => {
  return (
    <>
      <div className="gradient absolute h-80 lg:h-(--custom-bg-height) w-full max-w-125 -z-10 rounded-b-[35px]"></div>
      <div className="flex flex-col gap-4 sm:gap-5 lg:gap-3 px-3 sm:px-5 lg:px-17.5 pt-4 lg:pt-11">
        <Navbar />
        <Hero />
      </div>
        <Results/>
    </>
  )
}
export default App