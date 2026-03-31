"use client";
import { RawMember } from "@/lib/features/members/types/members";
import { MemberCard } from "../ui/MemberCard";
import MembersFilter from "../ui/MembersFilter";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { departmentCards, DepartmentCard } from "../ui/DepartmentCard";

// Placeholder alumni data
const placeholderAlumni: Record<string, RawMember[]> = {
  "Full-Stack": [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 2,
            name: "Full-Stack",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 2,
            name: "Full-Stack",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  "Front-End": [
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 5,
            name: "Front-End",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  "Back-End": [
    {
      id: 4,
      name: "Bob Wilson",
      email: "bob.wilson@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 7,
            name: "Back-End",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  QA: [
    {
      id: 5,
      name: "Carol Brown",
      email: "carol.brown@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 9,
            name: "QA",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  DevOps: [
    {
      id: 6,
      name: "David Lee",
      email: "david.lee@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 1,
            name: "DevOps",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  "Project Manager": [
    {
      id: 7,
      name: "Eva Garcia",
      email: "eva.garcia@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 4,
            name: "Project Manager",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  "UI/UX": [
    {
      id: 8,
      name: "Frank Miller",
      email: "frank.miller@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 3,
            name: "UI/UX",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
  Creatives: [
    {
      id: 9,
      name: "Grace Davis",
      email: "grace.davis@alumni.addu.edu.ph",
      photo: "/images/alumni-placeholder.jpg",
      roles: [
        {
          roles: {
            id: 6,
            name: "Creatives",
            modifiedAt: "",
            createdAt: "",
            deletedAt: null,
          },
        },
      ],
    },
  ],
};

export interface AlumniMeetTheTeamSectionProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

export const AlumniMeetTheTeamSection: React.FC<
  AlumniMeetTheTeamSectionProps
> = ({ currentDepartment, setCurrentDepartment }) => {
  const router = useRouter();
  const [members, setMembers] = React.useState<RawMember[]>([]);

  // const officerRoles = [
  //   "Director",
  //   "Deputy Director",
  //   "Secretary General",
  //   "Treasurer",
  //   "Auditor",
  //   "External Affairs Head",
  //   "Frontend Head",
  //   "Backend Head",
  //   "UI/UX Head",
  //   "Creatives Head",
  //   "Public Relations Officer",
  // ];

  // function extractMembers(res: unknown): RawMember[] {
  //   if (
  //     res &&
  //     typeof res === "object" &&
  //     "data" in res &&
  //     Array.isArray((res as { data?: unknown }).data)
  //   ) {
  //     return (res as { data: RawMember[] }).data;
  //   }
  //   if (Array.isArray(res)) {
  //     return res as RawMember[];
  //   }
  //   return [];
  // }

  useEffect(() => {
    window.history.replaceState(
      null,
      "",
      `/alumni?department=${encodeURIComponent(currentDepartment)}`,
    );
  }, [currentDepartment]);

  useEffect(() => {
    // async function fetchData() {
    //       let res;
    //       switch (currentDepartment) {
    //         case "Full-Stack":
    //           res = await GetMembers(2);
    //           break;
    //         case "Front-End":
    //           res = await GetMembers(5);
    //           break;
    //         case "Back-End":
    //           res = await GetMembers(7);
    //           break;
    //         case "QA":
    //           res = await GetMembers(9);
    //           break;
    //         case "DevOps":
    //           res = await GetMembers(1);
    //           break;
    //         case "Project Manager":
    //           res = await GetMembers(4);
    //           break;
    //         case "UI/UX":
    //           res = await GetMembers(3);
    //           break;
    //         case "Creatives":
    //           res = await GetMembers(6);
    //           break;
    //         default:
    //           res = await GetMembers();
    //       }

    //       const membersArray: RawMember[] = extractMembers(res);

    //       // ✅ Filter out officers
    //       const filteredMembers = membersArray.filter(
    //         (member) =>
    //           !member.roles.some((r) => officerRoles.includes(r.roles.name))
    //       );

    //       setMembers(filteredMembers);
    //     }

    // Placeholder alumni data
    const alumniData = placeholderAlumni[currentDepartment] || [];

    setMembers(alumniData);
    // fetchData();
  }, [currentDepartment]);

  useEffect(() => {
    router.push(`/alumni?department=${encodeURIComponent(currentDepartment)}`);
  }, [currentDepartment, router]);

  return (
    <section className=" font-inter w-full flex flex-col items-center pb-4 sm:pb-7">
      <div className="relative flex flex-col items-center text-whtie text-center gap-2.5 w-full pt-20 pb-16 bg-blue3">
        <div className="absolute bg-gradient-to-b from-black/50 z-10 inset-0"></div>
        <div className="z-10">
          <h1 className="font-bold text-3xl sm:text-4xl">Meet the Alumni</h1>
          <p className="text-sm md:text-lg mt-1 mb-2 text-yellow4">
            (A.Y. &apos;23 - &apos;24)
          </p>
          <p className="text-base sm:text-lg">
            The alumni of SYSDEV &#8212; former builders of solutions for a
            better AdDU.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full">
        <MembersFilter
          currentDepartment={currentDepartment}
          setCurrentDepartment={setCurrentDepartment}
        />
      </div>

      {/* Department Card */}
      {departmentCards[currentDepartment as keyof typeof departmentCards] && (
        <DepartmentCard
          {...departmentCards[
            currentDepartment as keyof typeof departmentCards
          ]}
        />
      )}

      <div className="flex flex-col items-center mt-12 sm:mt-16 gap-y-3 sm:gap-y-9 lg:gap-y-10 w-full sm:w-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-10 w-full max-w-6xl">
          {members.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
