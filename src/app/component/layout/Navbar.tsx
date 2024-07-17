'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const [sticky, setSticky] = useState<boolean>(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 45);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const dropdowns = document.querySelectorAll('.dropdown');
            if (window.innerWidth >= 992) {
                dropdowns.forEach(dropdown => {
                    dropdown.addEventListener('mouseenter', () => {
                        dropdown.classList.add('show');
                        const toggle = dropdown.querySelector('.dropdown-toggle');
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (toggle && menu) {
                            toggle.setAttribute('aria-expanded', 'true');
                            menu.classList.add('show');
                        }
                    });
                    dropdown.addEventListener('mouseleave', () => {
                        dropdown.classList.remove('show');
                        const toggle = dropdown.querySelector('.dropdown-toggle');
                        const menu = dropdown.querySelector('.dropdown-menu');
                        if (toggle && menu) {
                            toggle.setAttribute('aria-expanded', 'false');
                            menu.classList.remove('show');
                        }
                    });
                });
            } else {
                dropdowns.forEach(dropdown => {
                    dropdown.removeEventListener('mouseenter', () => { });
                    dropdown.removeEventListener('mouseleave', () => { });
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check on mount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <small className="me-3 text-light"><i className="bi bi-geo-alt me-2"></i>123 Street, New York, USA</small>
                            <small className="me-3 text-light"><i className="bi bi-telephone-fill me-2"></i>+012 345 6789</small>
                            <small className="text-light"><i className="bi bi-envelope-open me-2"></i>info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="" target="_blank">
                                <i className="bi bi-twitter fw-normal"></i></Link>
                            
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="" target="_blank">
                                <i className="bi bi-facebook fw-normal"></i></Link>
                            
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="" target="_blank">
                                <i className="bi bi-linkedin fw-normal"></i></Link>
                            
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="" target="_blank">
                                <i className="bi bi-instagram fw-normal"></i></Link>
                            
                            <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="" target="_blank">
                                <i className="bi bi-youtube fw-normal"></i></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar start --> */}
            <div className="container-fluid position-relative p-0">
                <nav className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${sticky ? 'sticky-top shadow-sm' : ''}`}>
                    <Link href="/" className="navbar-brand p-0">
                            <h1 className="m-0 text-primary"><i className="bi bi-person me-2"></i>Startup</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="bi bi-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <Link href="/" className={`nav-item nav-link  ${path === '/' ? 'active' : ''}`}>Home
                            </Link>
                            <Link href="/about-us"  className={`nav-item nav-link ${path === '/about-us' ? 'active' : ''}`}>About
                            </Link>
                            <Link href="/services" className={`nav-item nav-link ${path === '/services' ? 'active' : ''}`}>Services
                            </Link>
                            <Link href="/services/programmatic-ads" className={`nav-item nav-link ${path === '/services/programmatic-ads' ? 'active' : ''}`}>
                             Progrmmatic Advertising 
                            </Link>
                            {/* <div className="nav-item dropdown">
                                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu m-0">
                                    <Link href="/price"  className="dropdown-item">Pricing Plan</Link>
                                    <Link href="/feature" className="dropdown-item">Our features</Link>
                                    <Link href="/team" className="dropdown-item">Team Members</Link>
                                    <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                                    <Link href="/quote" className="dropdown-item">Free Quote</Link>
                                </div>
                            </div> */}
                            <Link href="/contact" className={`nav-item nav-link ${path === '/contact' ? 'active' : ''}`}>Contact
                            </Link>
                        </div>
                        <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                            <i className="fa fa-search"></i>
                        </button>
                        <Link href="/#quote" className="btn btn-primary py-2 px-4 ms-3"> Request A Quote</Link>
                    </div>
                </nav>
            </div>

            {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Navbar