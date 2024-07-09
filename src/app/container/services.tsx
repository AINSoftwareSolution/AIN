import { servicesData } from '../Utilis/data'
import { ServiceCard } from '../component'

const Services = () => {
    return (
        // {/* Service End */}
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
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}

                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                        <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center 
                            justify-content-center text-center p-5">
                            <h3 className="text-white mb-3">Call Us For Quote</h3>
                            <p className="text-white mb-3">
                                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor
                                est magna stet eirmod
                            </p>
                            <h2 className="text-white mb-0">+012 345 6789</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services