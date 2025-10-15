import React from "react";
import developers from "@/lib/data/developers.json";
import { DeveloperCard } from "../ui/DeveloperCard";

const projectManagers = developers.filter((dev) =>
  dev.role.toLowerCase().includes("project manager")
);
function MeetTheDevsPage() {
  const departments = {
    Heads: developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("head") &&
        !dev.role.toLowerCase().includes("project manager")
    ),
    "UI/UX Designers": developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("ui/ux") &&
        !dev.role.toLowerCase().includes("head")
    ),
    "Graphic Designers": developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("graphic") &&
        !dev.role.toLowerCase().includes("head")
    ),
    "Frontend Developers": developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("frontend") &&
        !dev.role.toLowerCase().includes("head")
    ),
    "Backend Developers": developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("backend") &&
        !dev.role.toLowerCase().includes("head")
    ),
    "DevOps Engineers": developers.filter(
      (dev) =>
        dev.role.toLowerCase().includes("devops") &&
        !dev.role.toLowerCase().includes("head")
    ),
  };

  return (
    <div className="text-black flex flex-col items-center my-12 md:mb-16">
      <div className="text-center mb-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">
          Meet the Developers
        </h1>
      </div>

      <div className="max-w-6xl px-4 mb-16">
        <h2 className="font-semibold text-xl md:text-2xl mb-3 text-center">
          Project Managers
        </h2>
        <div className="grid md:grid-cols-2 gap-8 -mx-2">
          {projectManagers.map((dev, idx) => (
            <div key={dev.name + idx} className="flex justify-center">
              <DeveloperCard
                photoUrl={`https://samahan.addu.edu.ph/sysdev/images/developers/${dev.photoUrl}`}
                name={dev.name}
                role={dev.role}
              />
            </div>
          ))}
        </div>
      </div>

      {Object.entries(departments).map(
        ([department, devs]) =>
          devs.length > 0 && (
            <div key={department} className="max-w-6xl px-4 mb-16">
              <h2 className="font-semibold text-xl md:text-2xl mb-3 text-center">
                {department}
              </h2>
              <div
                className={
                  department === "DevOps Engineers"
                    ? "grid md:grid-cols-2 gap-8 -mx-2"
                    : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                }
              >
                {devs.map((dev, idx) => {
                  const isLast = idx === devs.length - 1;
                  return (
                    <div
                      key={dev.name + idx}
                      className={`flex justify-center ${
                        department !== "DevOps Engineers" &&
                        isLast &&
                        devs.length % 2 === 1
                          ? "md:col-span-2 lg:col-span-1"
                          : isLast && devs.length % 3 === 1
                          ? ""
                          : ""
                      }`}
                    >
                      <DeveloperCard
                        photoUrl={`https://samahan.addu.edu.ph/sysdev/images/developers/${dev.photoUrl}`}
                        name={dev.name}
                        role={dev.role}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default MeetTheDevsPage;
