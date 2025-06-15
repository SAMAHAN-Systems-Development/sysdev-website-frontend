import { Project } from '@/lib/features/projects/types/projects';
import React from 'react'
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import ProjectsModal from '../ui/ProjectsModal';
import Link from 'next/link';

interface HomeFeaturedProjectsSectionProps {
    projectsData: Project[];
    openedProjectId: number | null;
    setOpenedProjectId: (projectId: number | null) => void;
}

const HomeFeaturedProjectsSection: React.FC<HomeFeaturedProjectsSectionProps> = ({ projectsData, openedProjectId, setOpenedProjectId }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full px-6 mt-16 md:mt-26'>
        <div className='text-black italic font-bold text-2xl md:text-4xl mb-5 md:mb-8'>Featured Projects</div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-2 lg:gap-x-4 mb-4 md:mb-10'>
            {projectsData
            .filter((project) => project.featured)
            .map((projectsData, index) => (
                <ProjectCard 
                    project={projectsData} 
                    setOpenedProjectId={setOpenedProjectId} 
                    key={index}
                    smallVersion
                />
            ))}
        </div>
        <div className='flex items-center h-13'>
            <Button size={"big"} variant={"pink"} className='font-bold w-64 md:w-96 lg:w-[400px] lg:text-lg'>
              <Link href={"/projects"}>
                View All Projects
              </Link>
            </Button>
        </div>
        {openedProjectId && (
        <ProjectsModal
          openedProjectId={openedProjectId}
          setOpenedProjectId={setOpenedProjectId}
        />
      )}
    </div>
  )
}

export default HomeFeaturedProjectsSection