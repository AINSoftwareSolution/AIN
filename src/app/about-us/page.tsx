import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WhyChooseUs } from "../container";
import { Team1, Team2, Team3 } from "../Utilis/img";
import { TeamData } from "../Utilis/data";

const AboutUs = () => {
  return (
    <>

      <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '50px' }}>
        <div className="row py-5">
          <div className="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-4 text-white animated zoomIn">About Us</h1>
            <Link href="" className="h5 text-white">Home</Link>
            <i className="bi bi-circle text-white px-2"></i>
            <Link href="" className="h5 text-white">About</Link>
          </div>
        </div>
      </div>

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
