import Features from "../components/Features"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <div className='py-10 md:py-20 px-5 md:px-64 border-b'>
        <HeroSection/>
        <Features/>
    </div>
  )
}

export default Home