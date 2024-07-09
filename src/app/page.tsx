import Image from "next/image";
import { FeatureImg } from "./Utilis/img";
import { AboutUs, PricingPlan, Quote, Services, WhyChooseUs } from "./container";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <PricingPlan />
      <Quote />
    </div>
  );
};
export default Home;
