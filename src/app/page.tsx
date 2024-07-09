import Image from "next/image";
import { AboutUs, Quote } from "./container";
import FeatureImg from "./Utilis/img/feature.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <AboutUs />

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Why Choose Us
            </h5>
            <h1 className="mb-0">
              We Are Here to Grow Your Business Exponentially
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-boxes text-white"></i>
                  </div>
                  <h4>Best In Industry</h4>
                  <p className="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-award text-white"></i>
                  </div>
                  <h4>Award Winning</h4>
                  <p className="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
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
                    src={FeatureImg}
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
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-people text-white"></i>
                  </div>
                  <h4>Professional Staff</h4>
                  <p className="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="bi bi-telephone text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et
                    diam dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service End */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
            <h1 className="mb-0">
              Custom IT Solutions for Your Successful Business
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div
                className="service-item bg-light rounded d-flex flex-column align-items-center  
              justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="bi bi-shield text-white"></i>
                </div>
                <h4 className="mb-3">Cyber Security</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <Link className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="service-item bg-light rounded d-flex flex-column align-items-center 
              justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="bi bi-database text-white"></i>
                </div>
                <h4 className="mb-3">Data Analytics</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <Link className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div
                className="service-item bg-light rounded d-flex flex-column align-items-center 
              justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="bi bi-code-slash text-white"></i>
                </div>
                <h4 className="mb-3">Web Development</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <Link className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div
                className="service-item bg-light rounded d-flex flex-column align-items-center 
              justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="bi bi-android text-white"></i>
                </div>
                <h4 className="mb-3">Apps Development</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <Link className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div
                className="service-item bg-light rounded d-flex flex-column align-items-center 
              justify-content-center text-center"
              >
                <div className="service-icon">
                  <i className="bi bi-search text-white"></i>
                </div>
                <h4 className="mb-3">SEO Optimization</h4>
                <p className="m-0">
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <Link className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center 
               justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                  est magna stet eirmod
                </p>
                <h3 className="text-white mb-0">+012 345 6789</h3>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
                <h1 className="mb-0">We are Offering Competitive Prices for Our Clients</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Basic Plan</h4>
                            <small className="text-uppercase">For Small Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: "22px" , lineHeight: "45px"}}>$</small>49.00<small
                                    className="align-bottom" style={{fontSize: "16px" , lineHeight: "40px"}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="bg-white rounded shadow position-relative" style={{zIndex: "1"}}>
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Standard Plan</h4>
                            <small className="text-uppercase">For Medium Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>99.00<small
                                    className="align-bottom" style={{fontSize: "16px", lineHeight: "40px"}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-times text-danger pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="bg-light rounded">
                        <div className="border-bottom py-4 px-5 mb-4">
                            <h4 className="text-primary mb-1">Advanced Plan</h4>
                            <small className="text-uppercase">For Large Size Business</small>
                        </div>
                        <div className="p-5 pt-0">
                            <h1 className="display-5 mb-3">
                                <small className="align-top" style={{fontSize: "22px", lineHeight: "45px"}}>$</small>149.00<small
                                    className="align-bottom" style={{fontSize: "16px" , lineHeight: "40px"}}>/ Month</small>
                            </h1>
                            <div className="d-flex justify-content-between mb-3"><span>HTML5 & CSS3</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Bootstrap v5</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-3"><span>Responsive Layout</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <div className="d-flex justify-content-between mb-2"><span>Cross-browser Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                            <a href="" className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Pricing Plan End */}


   

      <Quote />
    </div>
  );
};
export default Home;
