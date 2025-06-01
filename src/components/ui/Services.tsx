import React from 'react';
import Image from "next/image";
import importedServicesData from '@/data/services.json';

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
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
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
                            <div className="font-instrument-sans bg-white p-6 flex flex-col justify-center text-center h-full">
                                <h3 className="text-lg font-bold text-blue3">{item.title}</h3>
                                <p className="text-sm text-blue2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ) : (
                            <div className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                                <Image
                                    src={item.src || ''}
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