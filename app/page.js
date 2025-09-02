import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import CustomSolutions from "./components/CustomSolutions";
import Solution from "./components/Solution";
import TrustedPartners from "./components/TrustedPartners";
import TrendingBlogs from './components/TrendingBlogs';
import CommunityPatreon from './components/CommunityPatreon';
import Answers from './components/Answers';
import GetInTouch from './components/GetInTouch';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import OurAchievements from './components/OurAchievements';

export default function Home() {
  return (
    <>
      <section id="home">
        <LandingPage />
      </section>
      
      <section id="about">
        <AboutUs />
      </section>
      
      {/* Solution and CustomSolutions overlap container */}
      <section id="services" className="relative">
        <Solution />
        <div className="relative -mt-60 md:-mt-60 lg:-mt-120 xl:-mt-126 z-20">
          <CustomSolutions />
        </div>
        <div className="relative -mt-8 md:-mt-20 lg:-mt-40 xl:-mt-76 z-10">
          <TrustedPartners />
        </div>
      </section>
      
      <section id="achievements">
        <OurAchievements/>
      </section>
      

      <section id="blogs">
        <TrendingBlogs />
      </section>

      <CommunityPatreon />
      
      <section id="faq">
        <Answers/>
      </section>
      
      <section id="contact">
        <GetInTouch/>
      </section>
      
      <Subscribe/>
      <Footer/>
    </>
  );
}
