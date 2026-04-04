"use client";
import alumni from "@/data/alumni.json";

interface Person {
  firstName: string;
  lastName: string;
  role?: string;
}

interface RoleSectionProps {
  role: string;
  members: Person[];
}

const AlumniCard: React.FC<Person> = ({ firstName, lastName, role }) => {
  return (
    <div className="flex flex-col items-center justify-between text-center">
      <p className="font-semibold  text-[14px] sm:text-[15px] md:text-[17px] text-blue3">
        {firstName} {lastName}
      </p>

      {role && (
        <span className="mt-1 px-3 py-1 text-[10px] sm:text-[11px] md:text-[13px] bg-blue3 text-yellow4 rounded-full w-34 md:w-40 lg:w-48">
          {role}
        </span>
      )}
    </div>
  );
};

interface OfficersSectionProps {
  officers: Person[];
}

const OfficersSection: React.FC<OfficersSectionProps> = ({ officers }) => {
  const top = officers.slice(0, 2);
  const middle = officers.slice(2, 6);
  const bottom = officers.slice(6, 10);

  return (
    <div className="flex flex-col items-center gap-10 mt-6 w-full">
      {/* Top (2 centered) */}
      <div className="flex flex-col items-center gap-6">
        {top.map((p, i) => (
          <AlumniCard key={i} {...p} />
        ))}
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full place-items-center">
        {middle.map((p, i) => (
          <AlumniCard key={i} {...p} />
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full place-items-center">
        {bottom.map((p, i) => (
          <AlumniCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

const RoleSection: React.FC<RoleSectionProps> = ({ role, members }) => {
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="bg-yellow4 text-blue3 font-bold px-6 py-2 rounded-full text-lg md:text-2xl w-full text-center">
        {role}
      </div>

      <div className="mt-4 text-center space-y-1">
        {members.map((m, i) => (
          <p
            key={i}
            className=" text-[14px] sm:text-[15px] md:text-[17px] text-blue3 font-bold"
          >
            {m.firstName} {m.lastName}
          </p>
        ))}
      </div>
    </div>
  );
};

export const AlumniMeetTheTeamSection = () => {
  return (
    <section className="font-inter w-full flex flex-col items-center pb-10 overflow-hidden">
      {/* HEADER */}
      <div className="relative flex flex-col items-center text-white text-center w-full pt-20 pb-16 bg-blue3">
        <div className="absolute bg-gradient-to-b from-black/50 inset-0"></div>

        <div className="z-10">
          <h1 className="font-bold text-3xl sm:text-4xl">Meet the Alumni</h1>

          <p className="text-sm md:text-lg mt-1 text-yellow4">
            (A.Y. &apos;23 - &apos;24)
          </p>

          <p className="text-base sm:text-lg mt-2">
            The alumni of SYSDEV — former builders of solutions for a better
            AdDU.
          </p>
        </div>
      </div>

      {/* OFFICERS */}
      <div className="mt-12 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-blue3">
          Officers (A.Y. &apos;23 - &apos;24)
        </h2>

        <OfficersSection officers={alumni.officers} />
      </div>

      {/* ROLES */}
      <div className="w-full max-w-2xl mt-12">
        {alumni.data.map((section, i) => (
          <RoleSection
            key={i}
            role={section.role.replace(/([A-Z])/g, " $1").trim()}
            members={section.members}
          />
        ))}
      </div>
    </section>
  );
};
