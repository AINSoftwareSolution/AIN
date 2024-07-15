import { ads, WhyAds } from "@/app/Utilis/img";
import Image from "next/image";

const ProgrammaticsAds = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 bg-header">
        <div className="row d-flex align-items-center justify-content-center py-5">
          <div className="col-12 text-center">
          <h1 className="display-4 text-white  animated zoomIn"> Programmatic Advertising </h1>
            <h4 className=" text-white text-center custom-heading">
              Bid on ad placements in real-time and reach your target audience
              when they&apos;re most likely to engage with your ads.
            </h4>
            <p className="text-white text-center mt-3 custom-paragraph">
              Highlight the potential to see a high return on investment (ROI)
              from programmatic advertising compared to traditional advertising
              methods.
            </p>
          </div>
        </div>
      </div>

      {/*  section */}
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-6">
              <Image src={WhyAds} alt="WHy Image" className="img-fluid" />
            </div>
            <div className="col-md-6 col-6">
              <div className="text-start mt-4">
                <h2 className="h2 text-primary mb-1 mt-5 text-start">Why?</h2>
                <ul>
                  <li>The next big move</li>
                  <li>Stay ahead of the competition</li>
                  <li>Low cost per thousand Impression</li>
                </ul>
              </div>
              <div className="text-start mt-4">
                <h2 className="h2 text-primary mb-1 mt-5 text-start">To...</h2>
                <ul>
                  <li>Scale Efficiently </li>
                  <li>Real time </li>
                  <li>Optimizations put data to use</li>
                </ul>
              </div>
              <div className="text-start mt-4">
                <h2 className="h2 text-primary mb-1 mt-5 text-start">
                  Using...
                </h2>
                <ul>
                  <li> Audio</li>
                  <li> Connected TV & </li>
                  <li>Billboards Display ads & Video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose */}
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Why Choose Programmatic
            </h5>
            <h1 className="mb-0">
              We Are Here to Grow Your Business Exponentially
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <h4 className="text-primary">Go beyond Display Ads</h4>
                  <p className="mb-0">
                    Reach & find potential buyers across the internet on mobile
                    apps, websites, connected TV, online radio, YouTube. Hyper
                    target at scale
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <h4 className="text-primary">
                    Put your historical data to use
                  </h4>
                  <p className="mb-0">
                    Extract meaningful audience insights: Association with 3rd
                    Party data providers, device usage, demographics etc.
                    Leverage 1st & 3rd party data
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4  wow zoomIn"
              data-wow-delay="0.9s"
              style={{ minHeight: "350px" }}
            >
              <div className="position-relative h-100">
                <div
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <Image
                    src={ads}
                    alt="Why-choose-us"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <h4 className="text-primary">Personalize content</h4>
                  <p className="mb-0">
                    Create dynamic & powerful creatives for your audiences with
                    “personalized content for your future prospects” created
                    using YOUR first party data
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <h4 className="text-primary">
                    Partner with relevant websites
                  </h4>
                  <p className="mb-0">
                    Understand where your audience resides & run exclusive
                    campaigns with negotiated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIVERSE TARGETING OPTIONS */}
      <div
        className="container-fluid pb-5 wow fadeInUp text-white targeting-options"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="pb-3 mb-5 mx-auto">
            <h2 className="fw-bold  text-uppercase text-white">
              DIVERSE TARGETING OPTIONS
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <i className="fs-1 bi bi-wifi"></i>
              <h5 className="text-white"> CONNECTION TYPE</h5>
              <p>Target users who are using WiFi when they see your ad </p>
            </div>
            <div className="col-lg-4">
              <i className="fs-1 bi bi-people"></i>
              <h5 className="text-white"> AUDIENCE</h5>
              <p>
                Target users based on their demographic, interests,and household
                income.
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fs-1 bi bi-clock"></i>
              <h5 className="text-white">TIME</h5>
              <p>
                Target specific times of the day based on user behavior. Uncover
                the most valuable times and optimize.{" "}
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fs-1 bi bi-pc-display-horizontal"></i>
              <h5 className="text-white">PLATFORM</h5>
              <p>
                Target by desktop,tablet, or mobile device.Target mobile
                campaigns by operating system.{" "}
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fs-1 bi bi-globe"></i>
              <h5 className="text-white">GEOGRAPHY</h5>
              <p>
                Geo target your campaigns by country,city, state or postal code
                in over 180 countries
              </p>
            </div>
            <div className="col-lg-4">
              <i className="fs-1 bi bi-menu-button"></i>
              <h5 className="text-white">CONTEXT</h5>
              <p>
                Target any users who are interested in certain page contexts,
                such as Contact Center.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* benifits */}
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Benefits of Enabling Programmatic
            </h5>
            <h1 className="mb-0">
              We Are Here to Grow Your Business Exponentially
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-3">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fs-2 bi bi-currency-dollar text-white"></i>
              </div>
              <p>
                Paying per impression on millions of apps & websites, enables
                lower costs compared to traditional media buying
              </p>
            </div>
            <div className="col-lg-3">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fs-2 bi bi-megaphone-fill text-white"></i>
              </div>
              <p>
                Create an impact by being available throughout the “buyer
                journey”
              </p>
            </div>
            <div className="col-lg-3">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fs-2 bi bi-gear-fill text-white"></i>
              </div>
              <p>
                Enable frequency capping, build audience persona , in a brand
                safe environment
              </p>
            </div>
            <div className="col-lg-3">
              <div
                className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fs-2 bi bi-bar-chart-line-fill text-white"></i>
              </div>
              <p>
                Analyze & Optimize your performance in real time. Get meaningful
                insights to scale digital efforts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammaticsAds;
