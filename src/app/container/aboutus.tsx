import React from "react";
import Image from "next/image";
import {AboutImg} from "../Utilis/img";

const AboutUs = () =>{

  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
              <h1 className="mb-0">
                The Best IT Solution With 10 Years of Experience
              </h1>
            </div>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>

            <div className="col-lg-5" >
              <div className="position-relative h-100">
                <Image
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={AboutImg}
                  alt="About Us"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AboutUs;
