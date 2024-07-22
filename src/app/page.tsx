import {
  AboutUsContainer,
  PricingPlan,
  Quote,
  ServicesList,
  WhyChooseUs,
} from "./container";

const Home = () => {
  return (
    <div>
      <AboutUsContainer />
      <WhyChooseUs />
      <ServicesList />
      <PricingPlan />
      <Quote />
    </div>
  );
};
export default Home;
