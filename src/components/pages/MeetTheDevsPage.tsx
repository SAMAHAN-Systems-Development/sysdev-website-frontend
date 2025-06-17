import React from 'react'
import developers from '@/lib/data/developers.json';
import { DeveloperCard } from '../ui/DeveloperCard';

function MeetTheDevsPage() {
  const firstRow = developers.slice(0, 2);
  const remainingRows = developers.slice(2);

  return (
    <div className='text-black flex flex-col items-center my-12 md:mb-16'>
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl lg:text-3xl sm:text-4xl">Meet the Developers</h1>
      </div>

      {/* First row with 2 columns */}
      <div className="grid md:grid-cols-2 gap-y-9 md:gap-6 mb-9 md:mb-6">
        {firstRow.map((dev, idx) => (
          <DeveloperCard
            key={dev.name + idx}
            photoUrl={`/images/developers/${dev.photoUrl}`}
            name={dev.name}
            role={dev.role}
          />
        ))}
      </div>

      {/* Remaining rows with 3 columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-9 md:gap-6">
        {remainingRows.map((dev, idx) => {
          const isLast = idx === remainingRows.length - 1;
          return (
            <div
              key={dev.name + idx}
              className={isLast ? 'md:col-span-2 md:flex md:justify-center lg:col-span-1' : ''}
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
}

export default MeetTheDevsPage
