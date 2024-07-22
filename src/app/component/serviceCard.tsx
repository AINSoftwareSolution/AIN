import Link from 'next/link';
import { ServiceType } from '../Utilis/types';

const ServiceCard: React.FC<ServiceType> = ({ icon, title, description, link, phone }) => {
    return (
        <div className={`col-lg-4 col-md-6 wow zoomIn`} data-wow-delay="0.3s">
            <div className={`service-item  bg-light rounded d-flex flex-column align-items-center justify-content-center text-center`}>
                <div className="service-icon">
                    <i className={`${icon} text-white`}></i>
                </div>
                <h4 className={`mb-3`}>{title}</h4>
                <p className={`m-0`}>{description.slice(0, 110)}</p>
                <Link className="btn btn-lg btn-primary rounded" href={link}>
                    <i className="bi bi-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard
