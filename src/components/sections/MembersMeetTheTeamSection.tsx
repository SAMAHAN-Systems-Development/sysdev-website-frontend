import members from "@/data/members.json";
import { Member } from "@/lib/types/members";
import { MemberCard } from "../ui/MemberCard";

export default function MembersMeetTheTeamSection() {
  const membersData = members as Member[];
   
  const fullStackHead = membersData.find(member => member.position === "Full-Stack Head");
  const frontEndHead = membersData.find(member => member.position === "Front-End Head");
  const backEndHead = membersData.find(member => member.position === "Back-End Head");
  const uiUxHead = membersData.find(member => member.position === "UI/UX Head");
  const creativesHead = membersData.find(member => member.position === "Creatives Head");
  
  const fullStackMembers = membersData.filter(member =>
    member.position === "Full-Stack" || 
    member.position2 === "Full-Stack"
    );
  
  const frontEndMembers = membersData.filter(member => 
    member.position === "Front-End" || 
    member.position2 === "Front-End"
  );

  const backEndMembers = membersData.filter(member => 
    member.position === "Back-End" || 
    member.position2 === "Back-End"
  );

  const projManMembers = membersData.filter(member => 
    member.position === "Proj. Man." || 
    member.position2 === "Proj. Man."
  );

  const uiUxMembers = membersData.filter(member => 
    member.position === "UI/UX" || 
    member.position2 === "UI/UX"
  );

  const devOpsMembers = membersData.filter(member =>
    member.position === "DevOps" || 
    member.position2 === "DevOps"
  );

  const creativesMembers = membersData.filter(member => 
    member.position === "Creatives" || 
    member.position2 === "Creatives"
  );
  return (
  <section className="font-inter w-full flex flex-col items-center px-7 pt-7 pb-4 md:p-14 xl:p-24 mt-10">
    <div className="flex flex-col items-center text-blue3 text-center gap-2.5">
      <h1 className="font-bold text-4xl">Meet the Team</h1>
      <p className="text-xl">
        The minds behind SYSDEV &#8212; building solution for a better AdDU.
      </p>
    </div>
    
    {/* full-Stack Team */}
    {fullStackMembers.length > 0 && (
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">Full-Stack</h2>
            {fullStackHead && (
        <div className="mb-8 flex justify-center w-full max-w-xs mx-auto">
            <MemberCard
            backgroundColor="blue3"
            positionColor="fullstack"
            member={fullStackHead}
            />
        </div>
        )}
                
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {fullStackMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="fullstack"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
    )}

    {/* front-End Team */}
    {frontEndMembers.length > 0 && (
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">Front-End</h2>
            {frontEndHead && (
        <div className="mb-8 flex justify-center w-full max-w-xs mx-auto">
            <MemberCard
            backgroundColor="blue3"
            positionColor="frontend"
            member={frontEndHead}
            />
        </div>
        )}
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {frontEndMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="frontend"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
    )}
    
    {/* back-End Team */}
    {backEndMembers.length > 0 && (
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">Back-End</h2>
        {backEndHead && (
        <div className="mb-8 flex justify-center w-full max-w-xs mx-auto">
            <MemberCard
            backgroundColor="blue3"
            positionColor="backend"
            member={backEndHead}
            />
        </div>
)}
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {backEndMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="backend"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
      
    )}
    {/* ui ux team  */}
    {uiUxMembers.length > 0 && (
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">UI/UX</h2>
        {uiUxHead && (
        <div className="mb-8 flex justify-center w-full max-w-xs mx-auto">
            <MemberCard
            backgroundColor="blue3"
            positionColor="uiux"
            member={uiUxHead}
            />
        </div>
)}   
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {uiUxMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="uiux"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
      
    )}
     {/* creatives team  */}
    {creativesMembers.length > 0 && (
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">UI/UX</h2>
        {creativesHead && (
        <div className="mb-8 flex justify-center w-full max-w-xs mx-auto">
            <MemberCard
            backgroundColor="blue3"
            positionColor="creatives"
            member={creativesHead}
            />
        </div>
)}   
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {creativesMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="creatives"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
      
    )}
    {/* proj man wawaweweer  */}
     <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">Project Managers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {projManMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="projmngr"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
    {/* devops team  */}
      <div className="flex flex-col items-center mt-16 gap-y-8">
        <h2 className="text-2xl text-blue3 font-bold">DevOps</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-6xl">
          {devOpsMembers.map((member, idx) => (
            <li key={idx} className="flex justify-center">
              <MemberCard
                backgroundColor="blue3"
                positionColor="devops"
                member={member}
              />
            </li>
          ))}
        </ul>
      </div>
  </section>
);
}
