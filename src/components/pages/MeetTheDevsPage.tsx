import React from 'react'
import developers from '@/lib/data/developers.json';
import { DeveloperCard } from '../ui/DeveloperCard';

const projectManagers = developers.filter(dev => 
    dev.role.toLowerCase().includes('project manager')
  );
function MeetTheDevsPage() {
  const departments = {
    'Heads': developers.filter(dev => 
      dev.role.toLowerCase().includes('head') && 
      !dev.role.toLowerCase().includes('project manager')
    ),
    'UI/UX Designers': developers.filter(dev => 
      dev.role.toLowerCase().includes('ui/ux') && 
      !dev.role.toLowerCase().includes('head')
    ),
    'Graphic Designers': developers.filter(dev => 
      dev.role.toLowerCase().includes('graphic') && 
      !dev.role.toLowerCase().includes('head')
    ),
    'Frontend Developers': developers.filter(dev => 
      dev.role.toLowerCase().includes('frontend') && 
      !dev.role.toLowerCase().includes('head')
    ),
    'Backend Developers': developers.filter(dev => 
      dev.role.toLowerCase().includes('backend') && 
      !dev.role.toLowerCase().includes('head')
    ),
    'Quality Assurance': developers.filter(dev => 
      dev.role.toLowerCase().includes('qa') && 
      !dev.role.toLowerCase().includes('head')
    ),
    'DevOps': developers.filter(dev => 
      dev.role.toLowerCase().includes('devops') && 
      !dev.role.toLowerCase().includes('head')
    )
  };

  
  return (
    <div className='text-black flex flex-col items-center my-12 md:mb-16'>
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl sm:text-4xl">Meet the Developers</h1>
      </div>
      
       <div className="w-full max-w-6xl px-4 mb-6">
        <h2 className="font-semibold text-2xl mb-3 text-center">Project Managers</h2>
        <div className="grid md:grid-cols-2 gap-0 -mx-2">
          {projectManagers.map((dev, idx) => (
            <div key={dev.name + idx} className="flex justify-center">
              <DeveloperCard
                photoUrl={`/images/developers/${dev.photoUrl}`}
                name={dev.name}
                role={dev.role}
              />
            </div>
          ))}
        </div>
      </div>

      {Object.entries(departments).map(([department, devs]) => (
        devs.length > 0 && (
          <div key={department} className="w-full max-w-6xl px-4 mb-6">
            <h2 className="font-semibold text-2xl mb-3 text-center">{department}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8">
            {devs.map((dev, idx) => {
              const isLast = idx === devs.length - 1;
              return (
                <div
                  key={dev.name + idx}
                  className={`flex justify-center ${
                    isLast && devs.length % 3 === 1 ? 'lg:col-span-3' : ''
                  }`}
                >
                  <DeveloperCard
                    photoUrl={`/images/developers/${dev.photoUrl}`}
                    name={dev.name}
                    role={dev.role}
                  />
                </div>
              );
            })}
          </div>
          </div>
        )
      ))}
    </div>
  )
}

export default MeetTheDevsPage