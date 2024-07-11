import React from "react";
import Image from "next/image";
// import WhyChImg from "..//src/Utilis/img/why-img2.PNG"

const ProgrammaticsAds = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 bg-header">
        <div className="row d-flex-center">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="h2 text-white text-center mt-5 custom-heading">
              Bid on ad placements in real-time and reach your target audience
              when they're most likely to engage with your ads.
            </h1>
            <p className="text-white text-center mt-3 custom-paragraph">
              Highlight the potential to see a high return on investment (ROI)
              from programmatic advertising compared to traditional advertising
              methods.
            </p>
          </div>
        </div>
      </div>

      {/*  section */}
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-6 col-6">
            {/* <Image src={WhyImage} alt="why-image" width={500} height={500} /> */}
            <img src="/why-img2.PNG" alt="WHy-Image" className="" />
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
                {" "}
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
  );
};

export default ProgrammaticsAds;
