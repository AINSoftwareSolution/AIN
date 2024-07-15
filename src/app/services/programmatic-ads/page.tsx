import {
  ads,
  WhyImg,
  Display360,
  GoogleADSImg,
  DV360Img,
  DisplayAndVideo360
} from "@/app/Utilis/img";
import Image from "next/image";
import Link from "next/link";

const ProgrammaticsAds = () => {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 bg-header">
        <div className="row d-flex align-items-center justify-content-center py-5">
          <div className="col-12 text-center">
            <h1 className="h2 text-white text-center  custom-heading">
              Bid on ad placements in real-time and reach your target audience
              when they&apos;re most likely to engage with your ads.
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
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container py-5">
    <div className="row g-5 d-flex align-items-center">
      <div className="col-lg-4 col-md-4 col-12">
        <Image src={WhyImg} alt="Why Image" className="img-fluid" />
      </div>
      <div className="col-lg-8 col-md-8 col-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="card shadow-lg">
              <div className="card-title text-start mt-4">
                <h2 className="h2 text-primary m-2">Why?</h2>
                <ul className="card-text text-sm-start">
                  <li>The next big move</li>
                  <li>Stay ahead of the competition</li>
                  <li>Low cost per thousand Impression</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="card shadow-lg">
              <div className="card-title text-start mt-4">
                <h2 className="h2 text-primary m-2">To</h2>
                <ul className="card-text text-sm-start">
                  <li>Scale Efficiently</li>
                  <li>Real time</li>
                  <li>Optimizations put data to use</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="card shadow-lg">
              <div className="card-title text-start mt-4">
                <h2 className="h2 text-primary my-2 mx-2">Using</h2>
                <ul className="card-text text-sm-start">
                  <li>Audio</li>
                  <li>Connected TV &</li>
                  <li>Billboards Display ads & Video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Direct Media Buying */}
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container py-5">
    <div
      className="section-title text-center position-relative pb-3 mb-5 mx-auto"
      style={{ maxWidth: "600px" }}
    >
      <h5 className="fw-bold text-primary text-uppercase">
        Direct Media Buying
      </h5>
      <h1 className="mb-0">
        Be Visible Where Your Brand Is Recognized The Most
      </h1>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100 shadow-lg border-1">
          <div className="card-body">
            <h5 className="card-title text-primary text-start">
              Efficiency
            </h5>
            <div className="link-animated d-flex flex-column justify-content-start">
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Streamline trafficking
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Quicker Execution
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Quicker Execution
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Better troubleshooting tools
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-lg border-1">
          <div className="card-body">
            <h5 className="card-title text-primary text-start">
              PERFORMANCE
            </h5>
            <div className="link-animated d-flex flex-column justify-content-start">
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Manage Reach
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Manage Frequency
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Consolidation of multiple media buys
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Simplified optimization
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100 shadow-lg border-1">
          <div className="card-body">
            <h5 className="card-title text-primary text-start">
              PRECISION
            </h5>
            <p> Customize your campaigns using:</p>
            <div className="link-animated d-flex flex-column justify-content-start">
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Audience
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Geography
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Time
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Language
              </Link>
              <Link className="text-dark mb-2" href="#">
                <i className="bi bi-arrow-right text-primary me-2"></i>
                Pacing controls
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Demand Side Platform (DSP) */}
      <div className="container-fluid pb-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container py-5">
    <div
      className="section-title text-center position-relative pb-3 mb-4 mx-auto"
      style={{ maxWidth: "600px" }}
    >
      <h5 className="fw-bold text-primary text-uppercase">
        Demand Side Platform (DSP)
      </h5>
      <h3 className="mb-0">
        A demand-side platform (DSP) is a software/tool that allows buyers of digital advertising inventory to manage multiple ads
      </h3>
    </div>
    <div className="text-center">
      <Image
        src={Display360}
        className="img-fluid rounded"
        alt="display360"
        height={100}
      />
    </div>
  </div>
</div>


      {/* DV360 section 13 */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container py-5">
    <div
      className="section-title text-center position-relative pb-3 mx-auto mb-0"
      style={{ maxWidth: "600px" }}
    >
      <h5 className="fw-bold text-primary text-uppercase">
        DV360 vs Google Ads
      </h5>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
      <div className="col"></div>
      <div className="col text-center">
        <Image src={GoogleADSImg} alt="Google Ads" height={100} />
      </div>
      <div className="col text-center">
        <Image src={Display360} alt="Display360" height={100} />
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-0">
      <div className="col">
        <div className="card-head rounded">
          <div className="card-body">
            <h5 className="card-title text-white text-center">Reach</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">GDN</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              80+ Ad exchanges
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
      <div className="col">
        <div className="card-head rounded">
          <div className="card-body">
            <h5 className="card-title text-white text-center">
              Frequency Capping
            </h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              By Day, Week, Month
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              By Minute, Hour, Lifetime
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card-head rounded">
          <div className="card-body">
            <h5 className="card-title text-white text-center">
              Dynamic Creatives
            </h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              Unavailable Static Banner, Video, HTML5
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              Available Rich Media, Audio, Connected TV
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card-head rounded">
          <div className="card-body">
            <h5 className="card-title text-white text-center">
              Auction Deals
            </h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              Not available
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-title text-black text-center">
              RTB, Preferred Deals, Guaranteed Deals
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/*Display and Video360 */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container py-5">
    <div
      className="section-title text-center position-relative pb-3 mx-auto mb-5"
      style={{ maxWidth: "600px" }}
    >
      <h5 className="fw-bold text-primary text-uppercase">
        Display & Video 360
      </h5>
    </div>
    <div className="text-center">
      <Image
        src={DisplayAndVideo360}
        alt="display-image"
        className="img-fluid"
      />
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
