'use client'

import React, { useEffect, useState } from 'react'
import ProjectsFilter from '../ui/ProjectsFilter'
import SortDropdown from '../ui/SortDropdown'
import projectsData from '@/data/projects.json';
import { Project } from '@/lib/features/projects/types/projects';
import ProjectCard from '../ui/ProjectCard';
import ProjectsModal from '../ui/ProjectsModal';
import { GetMembers } from '@/lib/features/members/service/GetMembers.api';
import { GetProjects } from '@/lib/features/projects/service/GetProjects.api';

function ProjectsDisplaySection() {
  const [openedProject, setOpenedProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'SAMAHAN' | 'Other'>('SAMAHAN');

  useEffect(() => {
    // async function fetchData() {
    //   const res = await GetMembers();
    //   console.log(res);
    // }
    async function fetchData2() {
      const res = await GetProjects();
      console.log(res);
    }
    // fetchData();
    fetchData2();
  }, [])

  // Disable body scroll when modal is open
  useEffect(() => {
    if (openedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openedProject]);
  return (
    <div className='w-full flex flex-col items-center py-28'>
      <div className='w-full max-w-4xl px-6 sm:px-10 lg:px-8'>
        <div className="mb-2">
          <ProjectsFilter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        </div>
        <div className="mb:3">
          <SortDropdown />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          {(projectsData as Project[])
            .filter(project =>
            ((selectedFilter === 'SAMAHAN' && (project.type == "internal")) ||
              (selectedFilter === 'Other' && (project.type == "external" || project.type == "cross-orgs")))
            )
            .map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                setOpenedProject={setOpenedProject}
              />
            ))}
        </div>
      </div>
      {openedProject && (
        <ProjectsModal
          project={openedProject}
          setOpenedProject={setOpenedProject}
        />
      )}
    </div>
  )
}

export default ProjectsDisplaySection