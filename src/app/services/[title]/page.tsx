'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/app/component';
import { servicesData } from '@/app/Utilis/data';
import { AboutImg } from '@/app/Utilis/img';
import { useRouter } from 'next/navigation';

const ServiceDetails = ({ params }: { params: { title: string } }) => {

  const router = useRouter();
  const matchedService = servicesData.find(service => service.link.split('/').pop() === params.title);
  const breadcrumbLinks = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: matchedService?.title || '', url: matchedService?.link || '' },
  ];

  if (!matchedService) {
    if (typeof window !== 'undefined') {
      router.push('/404');
    }
    return null;
  }
  return (
    <>
      <Header title={matchedService.title} breadcrumbLinks={breadcrumbLinks} />

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <p className="mb-4">&nbsp; &nbsp;{matchedService.description}</p>
              <p className="mb-4">&nbsp; &nbsp;{matchedService.description2}</p>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
                <div
                  className="bg-primary d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-telephone-fill text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
              <Link
                href={"/#quote"}
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <Image
                  alt="about_us"
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={AboutImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ServiceDetails