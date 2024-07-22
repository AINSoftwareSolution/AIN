
import Image from "next/image";
import { Testimonial1, Testimonial2, Testimonial3, Testimonial4 } from "../Utilis/img";
import Link from "next/link";

const Testimonial = () => {


    return (

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">

            <div className="container py-5">
                <div
                    className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                    style={{ maxWidth: "600px" }}
                >
                    <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                    <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
                </div>
                {/* <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s"> */}
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card h-100 bg-light border-1">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">

                                <Image
                                    src={Testimonial1}
                                    alt="testimonial1-img"
                                    width={60}
                                    height={60}
                                />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 shadow-md border-1">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <Image
                                    className="img-fluid rounded"
                                    alt="testimonial-img2"
                                    src={Testimonial2}
                                    width={60}
                                    height={60}
                                />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light border-1">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <Image
                                    className="img-fluid rounded"
                                    alt="testimonial3"
                                    src={Testimonial3}
                                    width={60}
                                    height={60}
                                />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                    </div>
                    {/* <div className="col">
                        <div className="card h-100 shadow-lg border-1">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <Image
                                    className="img-fluid rounded"
                                    alt="testimonial-img4"
                                    src={Testimonial4}
                                    width={60}
                                    height={60}
                                />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>

                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    

     
  



    );
};

export default Testimonial;
