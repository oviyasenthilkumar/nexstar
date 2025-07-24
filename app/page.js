import Head from 'next/head';
import LandingPage from "./components/LandingPage";
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
      <Solution />
      <CustomSolutions />
      <TrustedPartners />
      <OurAchievements/>
      <TrendingBlogs />
      <Answers/>
      <GetInTouch/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
