import { Header } from "../component";
import { ServicesList } from "../container";


const Services = () => {
    const breadcrumbLinks = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
    ];
    return (
        <>
            <Header title="Services" breadcrumbLinks={breadcrumbLinks} />
            <ServicesList />
        </>
    )
}

export default Services;