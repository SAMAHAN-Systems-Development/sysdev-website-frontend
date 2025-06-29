import React from 'react';
import Image from "next/image";
import importedServicesData from '@/data/services.json';
import { withBasePath } from '@/lib/utils';

interface ServiceItem {
    id: string;
    type: 'text' | 'image';
    title?: string;
    description?: string;
    src?: string;
    alt?: string;
    orderClasses: string;
    roundingClasses: string;
}

const servicesData = importedServicesData as ServiceItem[];

const Services = () => {
    return (
        <div className="w-full max-w-96 sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-0 sm:gap-x-4 lg:gap-0">
                {servicesData.map((item: ServiceItem) => (
                    <div
                        key={item.id}
                        className={`
                            ${item.orderClasses} 
                            ${item.roundingClasses} 
                            overflow-hidden 
                            h-full 
                        `}
                    >
                        {item.type === 'text' ? (
                            <div className="font-instrument-sans bg-white p-3 sm:p-4 md:p-6 flex flex-col justify-center text-center h-full">
                                <h3 className="text-[11px] sm:text-base md:text-lg font-bold text-blue3 mb-1 sm:mb-2">{item.title}</h3>
                                <p className="text-[10px] sm:text-xs md:text-sm text-blue2 leading-snug sm:leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ) : (
                            <div className="relative w-full h-full min-h-[120px] sm:min-h-[150px] md:min-h-[230px] lg:min-h-[200px]">
                                <Image
                                    src={withBasePath(item.src || '')}
                                    alt={item.alt || 'Service Image'}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;