import Head from 'next/head';
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import CustomSolutions from "./components/CustomSolutions";
import Solution from "./components/Solution";
import TrustedPartners from "./components/TrustedPartners";
import TrendingBlogs from './components/TrendingBlogs';
import Answers from './components/Answers';
import GetInTouch from './components/GetInTouch';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import OurAchievements from './components/OurAchievements';

export default function Home() {
  return (
    <>
      <Head>
        <title>NexStar - Unlock Growth</title>
      </Head>
      {/* <Header /> */}
      <LandingPage />
      <AboutUs />
      
      {/* Solution and CustomSolutions overlap container */}
      <div className="relative">
        <Solution />
        <div className="relative -mt-60 md:-mt-60 lg:-mt-120 xl:-mt-126 z-20">
          <CustomSolutions />
        </div>
        <div className="relative -mt-8 md:-mt-20 lg:-mt-40 xl:-mt-76 z-10">
          <TrustedPartners />
        </div>
      </div>
      
      <OurAchievements/>
      <TrendingBlogs />
      <Answers/>
      <GetInTouch/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
