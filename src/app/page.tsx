import { The_Girl_Next_Door } from "next/font/google";

import {
  AboutUsContainer,
  PricingPlan,
  Quote,
  ServicesList,
  WhyChooseUs,
  Testimonial,
} from "./container";

const Home = () => {
  return (
    <div>
      <AboutUsContainer />
      <WhyChooseUs />
      <ServicesList />
      <PricingPlan />
      <Quote />
      <Testimonial />
    </div>
  );
};
export default Home;
