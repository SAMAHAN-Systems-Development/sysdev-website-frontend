"use client";

import React, { useEffect, useState } from "react";
import ProjectsFilter from "../ui/ProjectsFilter";
import SortDropdown from "../ui/SortDropdown";
import { Project } from "@/lib/features/projects/types/projects";
import ProjectCard from "../ui/ProjectCard";
import ProjectsModal from "../ui/ProjectsModal";
import { GetProjects } from "@/lib/features/projects/service/GetProjects.api";
import ServiceProjectsIdeaInMind from "../ui/ServiceProjectsIdeaInMind";

function ProjectsDisplaySection() {
  const [openedProjectId, setOpenedProjectId] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<"SAMAHAN" | "Other">(
    "SAMAHAN"
  );
  // Separate states for sorting
  const [sortByName, setSortByName] = useState<"asc" | "desc" | null>(null);
  const [sortByYear, setSortByYear] = useState<"yearDesc" | "yearAsc" | null>(
    null
  );

  const [projectsData, setProjectsData] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      let res;
      // Only one sort can be active at a time
      if (sortByYear) {
        res = await GetProjects(undefined, undefined, sortByYear);
      } else if (sortByName) {
        // For name sorting, fetch without sorting and sort on frontend
        console.log("Sorting by name:", sortByName);
        res = await GetProjects(undefined, undefined, undefined);

        if (Array.isArray(res)) {
          const flattenedData = res.flat();
          // Sort on the frontend
          const sorted = [...flattenedData].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (sortByName === "asc") {
              return titleA.localeCompare(titleB);
            } else {
              return titleB.localeCompare(titleA);
            }
          });
          setProjectsData(sorted);
          console.log(
            "Projects after frontend sorting:",
            sorted.map((p) => p.title)
          );
          return;
        }
      } else {
        res = await GetProjects();
      }
      if (Array.isArray(res)) {
        setProjectsData(res.flat());
      }
    }
    fetchData();
  }, [sortByName, sortByYear]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (openedProjectId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openedProjectId]);

  return (
    <div className="w-full flex flex-col items-center py-16">
      <div className="w-full max-w-4xl px-6 sm:px-10 lg:px-8">
        <div className="mb-2">
          <ProjectsFilter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
        <div className="mb:3">
          <SortDropdown
            sortByName={sortByName}
            setSortByName={setSortByName}
            sortByYear={sortByYear}
            setSortByYear={setSortByYear}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          {(projectsData as Project[])
            .filter(
              (project) =>
                (selectedFilter === "SAMAHAN" && project.type == "internal") ||
                (selectedFilter === "Other" &&
                  (project.type == "external" || project.type == "cross_orgs"))
            )
            .map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                setOpenedProjectId={setOpenedProjectId}
              />
            ))}
        </div>
      </div>
      <ServiceProjectsIdeaInMind />
      {openedProjectId && (
        <ProjectsModal
          openedProjectId={openedProjectId}
          setOpenedProjectId={setOpenedProjectId}
        />
      )}
    </div>
  );
}

export default ProjectsDisplaySection;
