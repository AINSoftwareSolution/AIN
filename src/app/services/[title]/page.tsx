'use client'
import { servicesData } from '@/app/Utilis/data';
import { useRouter } from 'next/navigation';
import React from 'react'

const ServiceDetails = ({ params }: { params: { title: string } }) => {

    const router = useRouter();
    const matchedService = servicesData.find(service => service.path.split('/').pop() === params.title);

    if (!matchedService) {
        if (typeof window !== 'undefined') {
            router.push('/404');
        }
        return null;
    }
  return (
    <div>{matchedService.title}</div>
  )
}

export default ServiceDetails