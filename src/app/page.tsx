import { The_Girl_Next_Door } from "next/font/google";

import {
  AboutUs,
  PricingPlan,
  Quote,
  ServicesList,
  WhyChooseUs,
  Testimonial,
} from "./container";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <WhyChooseUs />
      <ServicesList />
      <PricingPlan />
      <Quote />
      <Testimonial />
    </div>
  );
};
export default Home;
