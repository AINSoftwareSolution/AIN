import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Header } from "../component";
import { TeamData } from "../Utilis/data";
import { AboutUsContainer, WhyChooseUs} from "../container";

const AboutUs = () => {
  const breadcrumbLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
  ];
  return (
    <>
      <Header title="About Us" breadcrumbLinks={breadcrumbLinks} />

      <AboutUsContainer />
      <WhyChooseUs />

      {/* Team */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Team Members
            </h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>
          <div className="row g-5">
            {
              TeamData.map((team, index) => (
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s" key={index}>
                  <div className="team-item bg-light rounded overflow-hidden">
                    <div className="team-img position-relative overflow-hidden">
                      <Image
                        className="img-fluid w-100"
                        src={team.imageSrc}
                        alt={team.name}
                      />
                      <div className="team-social">
                        <Link
                          className="btn btn-lg btn-primary btn-lg-square rounded"
                          href={team.socialLinks.twitter}
                        >
                          <i className="bi bi-twitter fw-normal"></i>
                        </Link>
                        <Link
                          className="btn btn-lg btn-primary btn-lg-square rounded"
                          href={team.socialLinks.facebook}
                        >
                          <i className="bi bi-facebook fw-normal"></i>
                        </Link>
                        <Link
                          className="btn btn-lg btn-primary btn-lg-square rounded"
                          href={team.socialLinks.instagram}
                        >
                          <i className="bi bi-instagram fw-normal"></i>
                        </Link>
                        <Link
                          className="btn btn-lg btn-primary btn-lg-square rounded"
                          href={team.socialLinks.linkedin}
                        >
                          <i className="bi bi-linkedin fw-normal"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <h4 className="text-primary">{team.name}</h4>
                      <p className="text-uppercase m-0">{team.designation}</p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
