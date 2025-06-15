'use client'

import React, { useEffect, useState } from 'react'
import HomeFeaturedProjectsSection from '../sections/HomeFeaturedProjectsSection'
import { GetProjects } from '@/lib/features/projects/service/GetProjects.api';
import { Project } from '@/lib/features/projects/types/projects';
import HomeHeroBanner from '../HomeHeroBanner';
import HomeWhoWeAre from '../sections/HomeWhoWeAre';
import HomeGetStartedBanner from '../HomeGetStartedBanner';
import HomeOurServices from '../sections/HomeOurServices';

function HomePage() {
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [openedProjectId, setOpenedProjectId] = useState<number | null>(null);
    
    useEffect(() => {
        async function fetchData() {
            const res = await GetProjects();
            if (Array.isArray(res)) {
            setProjectsData(res.flat());
            }
        }
        fetchData();
    }, []);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (openedProjectId) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
        return () => {
          document.body.style.overflow = '';
        };
    }, [openedProjectId]);

  return (
    <div>
        <HomeHeroBanner/>
        <HomeWhoWeAre/>
        <HomeGetStartedBanner/>
        <HomeFeaturedProjectsSection 
            projectsData={projectsData}
            openedProjectId={openedProjectId}
            setOpenedProjectId={setOpenedProjectId}
        />
        <HomeOurServices/>
    </div>
  )
}

export default HomePage