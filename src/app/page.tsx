import {
  AboutUs,
  PricingPlan,
  Quote,
  ServicesList,
  WhyChooseUs,
} from "./container";

const Home = () => {
  return (
    <div>
      <AboutUs />
      <WhyChooseUs />
      <ServicesList />
      <PricingPlan />
      <Quote />
    </div>
  );
};
export default Home;
